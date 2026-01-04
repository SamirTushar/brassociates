"use client";

import { ChevronDown, BookOpen, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const legalArticles = [
  {
    id: 1,
    title: "१) घटस्फोटाचे कायदे (Divorce Laws)",
    content:
      "भारतामध्ये घटस्फोटाचे कायदे वेगवेगळ्या वैयक्तिक कायद्यांवर आधारित आहेत – हिंदू विवाह अधिनियम, विशेष विवाह अधिनियम, मुस्लिम वैयक्तिक कायदा इत्यादी. घटस्फोटाची कारणे साधारणपणे क्रूरता, परित्याग, व्यभिचार, मानसिक आजार, विवाहाचे अपयश, किंवा अनुकूलतेचा अभाव अशी असू शकतात. घटस्फोट प्रक्रिया कोर्टात याचिका दाखल करण्यापासून सुरू होते आणि पुरावे, समजुती, आणि दोन्ही पक्षांची मते ऐकून निर्णय दिला जातो. कोणत्याही प्रकारच्या घटस्फोटात कायदेशीर मार्गदर्शन आणि योग्य दस्तऐवज फार महत्त्वाचे असतात.",
  },
  {
    id: 2,
    title: "२) मुलांचे ताबा (Child Custody)",
    content:
      "मुलांच्या ताब्याचा निर्णय हा केवळ पालकांच्या हक्कांचा नसून मुलांच्या हिताचा मुद्दा असतो. न्यायालय मुलांच्या सुरक्षितता, शिक्षण, आर्थिक स्थैर्य, आणि दोन्ही पालकांशी असलेला भावनिक संबंध यांचा विचार करते. तात्पुरता ताबा आणि अंतिम ताबा असे दोन प्रकार असतात. संयुक्त (joint custody) किंवा भेटीचा हक्क (visitation rights) देखील दिला जाऊ शकतो. पालकांनी मुलांच्या हिताला प्राधान्य देऊन सुसंवादी मार्गाने ताब्याचे प्रश्न सोडवणे हितावह असते.",
  },
  {
    id: 3,
    title: "३) 498A – पतीकडून किंवा सासरकडून क्रूरता",
    content:
      "भारतीय दंड संहिता कलम 498A नुसार, पती किंवा सासरकडून होणारी मानसिक किंवा शारीरिक क्रूरता ही दंडनीय गुन्हा मानली जाते. तक्रार महिला पोलीस स्टेशन, स्थानिक पोलीस स्टेशन किंवा ऑनलाइन पोर्टलवरही करता येते. या कलमाखाली अटक, चौकशी, आणि न्यायालयीन प्रक्रिया होते. पिडीत महिलेला संरक्षण आदेश, निवासाचे अधिकार, आणि न्यायालयीन उपाय मिळू शकतात. तथापि, दोन्ही पक्षांची विधाने आणि पुरावे न्यायालय तपासते.",
  },
  {
    id: 4,
    title: "४) घरगुती हिंसाचार (Domestic Violence)",
    content:
      "घरगुती हिंसाचार प्रतिबंध अधिनियम, 2005 नुसार महिलेला शारीरिक, मानसिक, भावनिक, आर्थिक किंवा लैंगिक छळापासून संरक्षण मिळते. पिडीत महिला संरक्षण अधिकारी, पोलीस स्टेशन किंवा कोर्टात अर्ज करू शकते. न्यायालय संरक्षण आदेश, निवास आदेश, आर्थिक मदत, मुलांच्या ताब्याबाबत आदेश देऊ शकते. DV Act ही महिलांसाठी एक जलद व प्रभावी कायदेशीर उपाययोजना आहे.",
  },
  {
    id: 5,
    title: "५) ट्रेडमार्क आणि व्यवसाय कायदे (Trademark & Business Law)",
    content:
      "व्यवसायात ब्रँडचे संरक्षण करण्यासाठी ट्रेडमार्क नोंदणी अत्यंत महत्त्वाची असते. ट्रेडमार्कमुळे नाव, लोगो, स्लोगन, किंवा उत्पादनाची ओळख सुरक्षित होते. ट्रेडमार्कचे उल्लंघन झाल्यास कायदेशीर कारवाई करता येते. याशिवाय व्यवसायासाठी कंपनी रजिस्ट्रेशन, करारपत्रे, गोपनीयता करार (NDA), आणि कंप्लायन्स हे सर्व दस्तऐवजीकरण कायद्याच्या अधीन येते. व्यवस्थित दस्तऐवज व्यवसायाला सुरक्षित व विश्वासार्ह बनवतात.",
  },
  {
    id: 6,
    title: "६) लीगल नोटीस ड्राफ्टिंग (Legal Notice Drafting)",
    content:
      "कुठल्याही विवादात कोर्टात जाण्यापूर्वी लीगल नोटीस ही पहिली पायरी असते. नोटीसमध्ये आपली मागणी, घटना, आणि दिलेला वेळ स्पष्टपणे नमूद केला जातो. नोटीस योग्य स्वरूपात आणि कायदेशीर भाषेत लिहिणे महत्त्वाचे असते. योग्य रचनेची नोटीस अनेक वेळा विवाद कोर्टात न नेता सोडवू शकते. नोटीस पाठवताना पोस्ट, ईमेल, किंवा कुरियरचे पुरावे ठेवणे महत्त्वाचे.",
  },
  {
    id: 7,
    title: "७) घरगुती हिंसाचार प्रकरण दाखल करणे (DV Case Filing)",
    content:
      "DV Act अंतर्गत अर्ज करण्यासाठी पिडीत महिलेने न्यायालयात १२, १८, १९, २०, २१ व २२ कलमांनुसार मागण्या करू शकते. यात संरक्षण आदेश, निवासाचा हक्क, आर्थिक मदत, वैद्यकीय खर्च, मुलांच्या ताब्याबाबत आदेश अशा मागण्या येतात. अर्जासोबत घटना, पुरावे, वैद्यकीय अहवाल, आणि आवश्यक कागदपत्रे जोडली जातात. कोर्ट सुनावणी घेऊन तात्पुरते (interim) आणि अंतिम आदेश देते.",
  },
  {
    id: 8,
    title: "८) परस्पर संमतीने घटस्फोट (Mutual Consent Divorce)",
    content:
      "पती-पत्नी परस्पर संमतीने घटस्फोट घेऊ शकतात जेव्हा दोन्ही जण विवाह टिकवणे शक्य नाही असे मान्य करतात. यात मुलांचे ताबा, भेटीचा हक्क, संपत्तीचे विभाजन, आणि भविष्यातील जबाबदाऱ्यांबाबत समजुती केल्या जातात. साधारणपणे दोन मोशनची प्रक्रिया असते आणि वेळ ६ महिने ते १ वर्ष लागू शकतो. ही प्रक्रिया शांत, जलद आणि कमी तणावपूर्ण असते.",
  },
  {
    id: 9,
    title: "९) जामीन अर्ज (Bail Application)",
    content:
      "जामीन हा आरोपीचा तात्पुरता स्वातंत्र्याचा अधिकार आहे. गुन्ह्याचे स्वरूप, पुरावे, आरोपीचे वर्तन आणि पळून जाण्याची शक्यता यांचा विचार करून कोर्ट जामीन देते. जामीन अर्ज anticipatory bail, regular bail किंवा interim bail अशा प्रकारे दाखल केला जातो. अर्जासोबत FIR, आरोपांची माहिती, आणि अटक परिस्थिती नमूद केली जाते. योग्यरीत्या तयार केलेला जामीन अर्ज कोर्टाला विश्वास देतो.",
  },
  {
    id: 10,
    title: "१०) करारपत्र ड्राफ्टिंग (Agreement Drafting)",
    content:
      "व्यवसाय, मालमत्ता, सेवा, भाडे किंवा भागीदारीसाठी करारपत्र हे सर्वात महत्त्वाचे दस्तऐवज असते. स्पष्ट अटी, जबाबदाऱ्या, कालावधी, पेमेंट, आणि विवाद निराकरणाची तरतूद असणे आवश्यक आहे. व्यवस्थित ड्राफ्ट केलेला करार भविष्यातील गैरसमज आणि विवाद टाळतो. करारपत्र तयार करताना कायदेशीर भाषा, अधिकार आणि कर्तव्यांची मर्यादा योग्यरीत्या नमूद करणे महत्त्वाचे.",
  },
];

const faqTopics = [
  {
    topic: "घटस्फोटाचे कायदे",
    questions: [
      {
        question: "प्र. १: मला घटस्फोट घ्यायचा आहे, प्रक्रिया कशी सुरू करावी?",
        answer:
          "उ: सर्वप्रथम तुमची परिस्थिती समजून घेण्यासाठी आम्ही एक सविस्तर कन्सल्टेशन घेतो. त्यानंतर घटस्फोटाचा प्रकार (संमतीने किंवा वादग्रस्त) ठरवून आवश्यक कागदपत्रे तयार करतो आणि कोर्टात याचिका दाखल केली जाते.",
      },
      {
        question: "प्र. २: घटस्फोटाला किती वेळ लागतो?",
        answer:
          "उ: परस्पर संमतीने घटस्फोट ६ महिने ते १ वर्षात पूर्ण होऊ शकतो. वादग्रस्त घटस्फोटाला थोडा अधिक वेळ लागू शकतो.",
      },
    ],
  },
  {
    topic: "मुलांचे ताबा",
    questions: [
      {
        question: "प्र. १: कोर्ट मुलांचा ताबा ठरवताना कोणत्या गोष्टी पाहते?",
        answer:
          "उ: मुलांचे हित, कल्याण, आर्थिक स्थैर्य, शिक्षण, सुरक्षितता आणि दोन्ही पालकांशी असलेले नाते हे मुख्य निकष असतात.",
      },
      {
        question: "प्र. २: वडिलांना देखील मुलांचा ताबा मिळू शकतो का?",
        answer:
          "उ: हो, परिस्थिती योग्य असल्यास वडिलांनाही ताबा मिळू शकतो. कोर्ट नेहमी मुलांच्या हिताचा विचार करते.",
      },
    ],
  },
  {
    topic: "498A – क्रूरता प्रकरणे",
    questions: [
      {
        question: "प्र. १: 498A तक्रार कुठे देऊ शकते?",
        answer:
          "उ: आपण स्थानिक पोलीस स्टेशन, महिला पोलीस स्टेशन किंवा ऑनलाइन पोर्टलवर तक्रार देऊ शकता.",
      },
      {
        question: "प्र. २: या प्रकरणात पती किंवा सासरकडून कायदेशीर कृती कशी होते?",
        answer:
          "उ: पोलीस चौकशी करतात, पुरावे गोळा करतात आणि आवश्यक असल्यास अटकही होऊ शकते.",
      },
    ],
  },
  {
    topic: "घरगुती हिंसाचार",
    questions: [
      {
        question: "प्र. १: DV Act अंतर्गत मी कोणत्या प्रकारची मदत मागू शकते?",
        answer:
          "उ: संरक्षण आदेश, निवासाचा हक्क, आर्थिक मदत, वैद्यकीय खर्च, मुलांचा ताबा, मानसिक त्रासाची भरपाई अशी अनेक मागण्या करता येतात.",
      },
      {
        question: "प्र. २: DV केस दाखल करायला वेळ किती लागतो?",
        answer:
          "उ: DV अर्ज दाखल करणे तात्काळ करता येते. कोर्ट तत्काळ (interim) आदेश देऊ शकते.",
      },
    ],
  },
  {
    topic: "ट्रेडमार्क आणि व्यवसाय कायदे",
    questions: [
      {
        question: "प्र. १: ट्रेडमार्क नोंदणी का आवश्यक आहे?",
        answer:
          "उ: तुमच्या ब्रँडचे नाव, लोगो किंवा उत्पादनाची ओळख सुरक्षित करण्यासाठी ट्रेडमार्क अत्यंत महत्त्वाचा असतो.",
      },
      {
        question: "प्र. २: ट्रेडमार्क किती वर्षांसाठी वैध असतो?",
        answer:
          "उ: ट्रेडमार्क १० वर्षांसाठी वैध असतो आणि त्याचे रिन्यूअल करता येते.",
      },
    ],
  },
  {
    topic: "लीगल नोटीस ड्राफ्टिंग",
    questions: [
      {
        question: "प्र. १: कोणत्या परिस्थितीत लीगल नोटीस पाठवावी?",
        answer:
          "उ: पैशाची परतफेड, करारभंग, मालमत्ता विवाद, नातेसंबंधातील तक्रारी, भाडेकरू संबंध असे अनेक प्रसंग असू शकतात.",
      },
      {
        question: "प्र. २: एक चांगली लीगल नोटीस कशी असावी?",
        answer:
          "उ: घटना स्पष्ट, मागणी ठळक, वेळमर्यादा निश्चित, आणि कायदेशीर आधार नीट दिलेला असावा.",
      },
    ],
  },
  {
    topic: "DV केस फाइलिंग",
    questions: [
      {
        question: "प्र. १: DV केस दाखल करण्यासाठी कोणती कागदपत्रे लागतात?",
        answer:
          "उ: घटना नोंद, पुरावे, वैद्यकीय अहवाल, फोटो/व्हिडिओ, तक्रार पत्र, आणि ओळखपत्र ही मुख्य कागदपत्रे लागतात.",
      },
      {
        question: "प्र. २: DV केससोबत 498A पण दाखल करता येते का?",
        answer:
          "उ: हो, दोन्ही कायदेशीर उपाय स्वतंत्र आहेत आणि परिस्थितीनुसार दोन्ही दाखल करता येतात.",
      },
    ],
  },
  {
    topic: "परस्पर संमतीने घटस्फोट (MCD)",
    questions: [
      {
        question: "प्र. १: MCD साठी कोणती कागदपत्रे आवश्यक असतात?",
        answer:
          "उ: विवाह प्रमाणपत्र, आधार/पॅन, पत्त्याचा पुरावा, फोटो, आणि दोघांमधील समजुतींचा करार.",
      },
      {
        question: "प्र. २: MCD मधे मुलांच्या ताब्याबाबत काय होते?",
        answer:
          "उ: दोघेही परस्पर समजुतीने ताबा, भेटीचा हक्क, आणि खर्च ठरवतात. कोर्ट त्याची पुष्टी करते.",
      },
    ],
  },
  {
    topic: "जामीन अर्ज",
    questions: [
      {
        question: "प्र. १: जामीन मिळण्यासाठी कोणत्या गोष्टी पहिल्या जातात?",
        answer:
          "उ: गुन्ह्याचे स्वरूप, आरोपीचा वर्तन, पळून जाण्याची शक्यता, पुरावा नष्ट करण्याचा धोका, आणि केसची गंभीरता.",
      },
      {
        question: "प्र. २: कोणते प्रकारचे जामीन अर्ज करता येतात?",
        answer: "उ: Anticipatory Bail, Regular Bail आणि Interim Bail.",
      },
    ],
  },
  {
    topic: "करारपत्र ड्राफ्टिंग",
    questions: [
      {
        question: "प्र. १: करारपत्रात कोणते मुख्य मुद्दे असायला हवेत?",
        answer:
          "उ: अटी, जबाबदाऱ्या, पेमेंट, कालावधी, गोपनीयता, आणि वाद निराकरणाची तरतूद.",
      },
      {
        question: "प्र. २: हाताने लिहिलेले करारपत्र कायदेशीर मान्य असते का?",
        answer:
          "उ: हो, पुरावा आणि सही असेल तर ते वैध ठरू शकते, पण टाईप केलेले आणि योग्य रचनेचे करार अधिक सुरक्षित असतात.",
      },
    ],
  },
];

export default function Marathi() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openArticle, setOpenArticle] = useState<number | null>(null);
  const [openFaqTopic, setOpenFaqTopic] = useState<number | null>(null);
  const [openFaqQuestion, setOpenFaqQuestion] = useState<string | null>(null);

  const toggleArticle = (id: number) => {
    setOpenArticle(openArticle === id ? null : id);
  };

  const toggleFaqTopic = (index: number) => {
    setOpenFaqTopic(openFaqTopic === index ? null : index);
    setOpenFaqQuestion(null);
  };

  const toggleFaqQuestion = (key: string) => {
    setOpenFaqQuestion(openFaqQuestion === key ? null : key);
  };

  return (
    <section id="marathi" ref={ref} className="bg-cream py-20">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="font-heading text-3xl md:text-4xl font-bold text-primary mb-3"
          >
            मराठी माहिती
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-body text-base md:text-lg text-dark"
          >
            कायदेशीर माहिती मराठीमध्ये
          </motion.p>
        </div>

        {/* Legal Articles Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-6 h-6 text-secondary" />
            <h3 className="font-heading text-2xl font-bold text-primary">
              कायदेशीर माहिती
            </h3>
          </div>

          <div className="space-y-4">
            {legalArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                className="bg-white rounded-lg shadow-sm border-l-4 border-secondary overflow-hidden"
              >
                <button
                  onClick={() => toggleArticle(article.id)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-cream transition-colors text-left"
                >
                  <h4 className="font-body text-lg font-semibold text-primary pr-4">
                    {article.title}
                  </h4>
                  <ChevronDown
                    className={`w-5 h-5 text-secondary flex-shrink-0 transition-transform ${
                      openArticle === article.id ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openArticle === article.id && (
                  <div className="px-6 pb-6 pt-2">
                    <p className="font-body text-base text-dark leading-relaxed">
                      {article.content}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQs Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <HelpCircle className="w-6 h-6 text-secondary" />
            <h3 className="font-heading text-2xl font-bold text-primary">
              नेहमी विचारले जाणारे प्रश्न (FAQs)
            </h3>
          </div>

          <div className="space-y-4">
            {faqTopics.map((topic, topicIndex) => (
              <motion.div
                key={topicIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.9 + topicIndex * 0.05 }}
                className="bg-white rounded-lg shadow-sm border-l-4 border-primary overflow-hidden"
              >
                <button
                  onClick={() => toggleFaqTopic(topicIndex)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-cream transition-colors text-left"
                >
                  <h4 className="font-body text-lg font-bold text-primary pr-4">
                    {topic.topic}
                  </h4>
                  <ChevronDown
                    className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${
                      openFaqTopic === topicIndex ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaqTopic === topicIndex && (
                  <div className="px-6 pb-4">
                    <div className="space-y-3">
                      {topic.questions.map((faq, faqIndex) => {
                        const faqKey = `${topicIndex}-${faqIndex}`;
                        return (
                          <div
                            key={faqKey}
                            className="border-t border-gray-200 pt-3"
                          >
                            <button
                              onClick={() => toggleFaqQuestion(faqKey)}
                              className="w-full text-left flex items-start justify-between gap-4 hover:text-secondary transition-colors"
                            >
                              <p className="font-body text-sm font-semibold text-dark">
                                {faq.question}
                              </p>
                              <ChevronDown
                                className={`w-4 h-4 text-secondary flex-shrink-0 mt-0.5 transition-transform ${
                                  openFaqQuestion === faqKey ? "rotate-180" : ""
                                }`}
                              />
                            </button>
                            {openFaqQuestion === faqKey && (
                              <p className="font-body text-sm text-muted leading-relaxed mt-2 ml-0">
                                {faq.answer}
                              </p>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Back to Top Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="text-center mt-12"
        >
          <a
            href="#home"
            className="inline-flex items-center gap-2 font-body text-sm font-medium text-secondary hover:text-primary transition-colors"
          >
            <ChevronDown className="w-4 h-4 rotate-180" />
            परत वर जा
          </a>
        </motion.div>
      </div>
    </section>
  );
}
