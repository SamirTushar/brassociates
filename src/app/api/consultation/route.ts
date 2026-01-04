import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    console.log('📩 New consultation request received:', {
      name: data.fullName,
      mobile: data.mobile,
      legalMatter: data.legalMatter
    });

    // Validate required fields
    if (!data.fullName || !data.mobile || !data.legalMatter || !data.consultationMode) {
      console.error('❌ Validation failed: Missing required fields');
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Save to database FIRST (most important - never lose data)
    console.log('💾 Saving to database...');

    try {
      const savedData = await prisma.consultation.create({
        data: {
          fullName: data.fullName,
          mobile: data.mobile,
          email: data.email || null,
          legalMatter: data.legalMatter,
          consultationMode: data.consultationMode,
          preferredDateTime: data.preferredDateTime || null,
          description: data.description || null,
          status: 'pending'
        }
      });

      console.log('✅ Saved to database successfully!', savedData.id);
    } catch (dbError) {
      console.error('❌ Database error:', dbError);
      return NextResponse.json(
        { error: 'Failed to save consultation request. Database may not be set up yet.' },
        { status: 500 }
      );
    }

    // Now try to send email notification (non-critical - data is already saved)
    console.log('📧 Attempting to send email notification...');

    if (!process.env.RESEND_API_KEY) {
      console.warn('⚠️ RESEND_API_KEY is not configured - skipping email notification');
      // Still return success since data is saved
      return NextResponse.json({
        success: true,
        message: 'Consultation request submitted successfully (email notification skipped)'
      });
    }

    try {
      // Initialize Resend with API key
      const resend = new Resend(process.env.RESEND_API_KEY);

      // Send email notification
      const { data: emailData, error } = await resend.emails.send({
      from: 'Consultation Form <onboarding@resend.dev>', // You'll change this to your domain later
      to: 'adv.bhaktirajput@gmail.com',
      replyTo: data.email || undefined,
      subject: `New Consultation Request from ${data.fullName}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #2d2d2d;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background-color: #1e3a5f;
                color: white;
                padding: 20px;
                text-align: center;
                border-radius: 8px 8px 0 0;
              }
              .content {
                background-color: #f8f5f0;
                padding: 30px;
                border-radius: 0 0 8px 8px;
              }
              .field {
                margin-bottom: 20px;
                padding: 15px;
                background-color: white;
                border-left: 4px solid #b8924c;
                border-radius: 4px;
              }
              .label {
                font-weight: bold;
                color: #1e3a5f;
                margin-bottom: 5px;
              }
              .value {
                color: #2d2d2d;
              }
              .footer {
                text-align: center;
                margin-top: 20px;
                padding-top: 20px;
                border-top: 1px solid #e0e0e0;
                color: #6b7280;
                font-size: 14px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2 style="margin: 0;">New Consultation Request</h2>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Full Name</div>
                  <div class="value">${data.fullName}</div>
                </div>

                <div class="field">
                  <div class="label">Mobile Number</div>
                  <div class="value"><a href="tel:${data.mobile}">${data.mobile}</a></div>
                </div>

                ${data.email ? `
                  <div class="field">
                    <div class="label">Email Address</div>
                    <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
                  </div>
                ` : ''}

                <div class="field">
                  <div class="label">Type of Legal Matter</div>
                  <div class="value">${data.legalMatter}</div>
                </div>

                <div class="field">
                  <div class="label">Preferred Consultation Mode</div>
                  <div class="value">${data.consultationMode}</div>
                </div>

                ${data.preferredDateTime ? `
                  <div class="field">
                    <div class="label">Preferred Date & Time</div>
                    <div class="value">${data.preferredDateTime}</div>
                  </div>
                ` : ''}

                ${data.description ? `
                  <div class="field">
                    <div class="label">Brief Description</div>
                    <div class="value">${data.description}</div>
                  </div>
                ` : ''}

                <div class="footer">
                  <p>This consultation request was submitted through your website.</p>
                  <p><strong>Please respond to the client as soon as possible.</strong></p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
      });

      if (error) {
        console.error('⚠️ Email sending failed:', error);
        // Still return success since data is saved in database
        return NextResponse.json({
          success: true,
          message: 'Consultation request submitted successfully (email notification failed - check database)'
        });
      }

      console.log('✅ Email sent successfully!');
      return NextResponse.json({
        success: true,
        message: 'Consultation request submitted successfully'
      });

    } catch (emailError) {
      console.error('⚠️ Email sending error:', emailError);
      // Still return success since data is saved in database
      return NextResponse.json({
        success: true,
        message: 'Consultation request submitted successfully (email notification error - check database)'
      });
    }

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
