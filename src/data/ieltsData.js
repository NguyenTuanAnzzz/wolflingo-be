export const ieltsPracticeSets = {
  reading: [
    {
      id: "ielts_read_1",
      title: "The Evolution of Renewable Energy Systems in Smart Cities",
      band: "8.0",
      topic: "Environment & Technology",
      passage: `In recent decades, the transition toward sustainable urban infrastructure has accelerated significantly, driven by escalating concerns regarding greenhouse gas emissions and resource depletion. Contemporary urban planners increasingly integrate decentralized renewable energy microgrids with artificial intelligence algorithms to optimize electricity distribution. Unlike conventional centralized power generation, which suffers from considerable transmission loss and rigidity, smart urban microgrids leverage photovoltaic solar arrays, wind turbines, and utility-scale lithium-ion storage to balance supply and demand dynamically.

A primary challenge in this paradigm shifts lies in intermittency—the natural fluctuation of solar and wind energy production. To mitigate this variability, smart cities utilize predictive analytics and machine learning to forecast energy consumption patterns. Furthermore, vehicle-to-grid (V2G) technology permits electric vehicles to act as auxiliary battery reservoirs during peak demand hours, discharging surplus power back into the municipal network. Researchers assert that such holistic integration not only enhances grid resilience but also significantly lowers carbon intensity across metropolitan areas.`,
      vocabularyHighlights: [
        { word: "decentralized", meaning: "phân tán, không tập trung", type: "adj", cefr: "C1" },
        { word: "intermittency", meaning: "tính gián đoạn, không liên tục", type: "noun", cefr: "C2" },
        { word: "mitigate", meaning: "làm giảm nhẹ, làm dịu bớt", type: "verb", cefr: "C1" },
        { word: "paradigm", meaning: "mô hình, khuôn mẫu chuẩn", type: "noun", cefr: "C1" },
        { word: "resilience", meaning: "khả năng phục hồi, tính bền bỉ", type: "noun", cefr: "C1" }
      ],
      questions: [
        {
          id: "ir_1_q1",
          type: "multiple_choice",
          questionText: "Why do modern urban planners prefer decentralized microgrids over conventional centralized power generation?",
          options: [
            { label: "A", text: "Because conventional power plants are entirely non-renewable." },
            { label: "B", text: "Because decentralized systems avoid significant transmission loss and offer dynamic flexibility." },
            { label: "C", text: "Because microgrids do not require energy storage systems." },
            { label: "D", text: "Because electric vehicles cannot connect to conventional networks." }
          ],
          correctAnswer: "B",
          explanation: "Bài đọc chỉ rõ: 'Unlike conventional centralized power generation, which suffers from considerable transmission loss and rigidity, smart urban microgrids... balance supply and demand dynamically.'"
        },
        {
          id: "ir_1_q2",
          type: "true_false_not_given",
          questionText: "Vehicle-to-grid (V2G) technology allows electric vehicles to supply power to the municipal network during peak hours.",
          options: [
            { label: "TRUE", text: "TRUE - Đồng ý với thông tin trong bài" },
            { label: "FALSE", text: "FALSE - Trái ngược với thông tin trong bài" },
            { label: "NOT GIVEN", text: "NOT GIVEN - Không được đề cập" }
          ],
          correctAnswer: "TRUE",
          explanation: "Đoạn 2 nêu rõ: 'vehicle-to-grid (V2G) technology permits electric vehicles to act as auxiliary battery reservoirs during peak demand hours, discharging surplus power back into the municipal network'."
        }
      ]
    },
    {
      id: "ielts_read_2",
      title: "The Psychology of Consumer Decision-Making",
      band: "7.5",
      topic: "Psychology & Business",
      passage: `Consumer behavior is governed by a delicate interplay of cognitive biases, emotional triggers, and social conditioning. Contrary to traditional economic theory, which posits that humans act as rational agents maximizing utility, behavioral economists have demonstrated that purchasing decisions are frequently irrational and subconscious. One prominent phenomenon is the 'decoy effect', wherein the introduction of an inferior third option systematically shifts consumer preference toward a more expensive alternative.

In digital retail environments, algorithmic recommendation engines exploit cognitive shortcuts such as social proof and scarcity heuristics. For instance, displaying real-time stock shortages alerts consumer urgency, triggering an immediate impulse to purchase. Understanding these psychological mechanisms enables designers to craft ethical interfaces that inform rather than manipulate consumer choices.`,
      vocabularyHighlights: [
        { word: "interplay", meaning: "sự tác động qua lại, ảnh hưởng lẫn nhau", type: "noun", cefr: "C1" },
        { word: "heuristics", meaning: "phương pháp suy luận tắt, kinh nghiệm trực quan", type: "noun", cefr: "C2" },
        { word: "rational", meaning: "có lý trí, hợp lý", type: "adj", cefr: "B2" },
        { word: "systematically", meaning: "một cách có hệ thống, có chủ đích", type: "adv", cefr: "C1" }
      ],
      questions: [
        {
          id: "ir_2_q1",
          type: "multiple_choice",
          questionText: "What does the 'decoy effect' describe in behavioral economics?",
          options: [
            { label: "A", text: "Consumers always select the cheapest available item." },
            { label: "B", text: "An inferior third option steers preference toward a higher-priced alternative." },
            { label: "C", text: "Social proof makes consumers avoid popular products." },
            { label: "D", text: "Rational agents calculate exact utility before buying." }
          ],
          correctAnswer: "B",
          explanation: "Bài viết nêu rõ: 'wherein the introduction of an inferior third option systematically shifts consumer preference toward a more expensive alternative.'"
        },
        {
          id: "ir_2_q2",
          type: "true_false_not_given",
          questionText: "Traditional economic theory assumes that buyers act primarily on subconscious emotions.",
          options: [
            { label: "TRUE", text: "TRUE - Đồng ý với thông tin trong bài" },
            { label: "FALSE", text: "FALSE - Trái ngược với thông tin trong bài" },
            { label: "NOT GIVEN", text: "NOT GIVEN - Không được đề cập" }
          ],
          correctAnswer: "FALSE",
          explanation: "Bài viết nói ngược lại: 'Contrary to traditional economic theory, which posits that humans act as rational agents maximizing utility...'"
        }
      ]
    },
    {
      id: "ielts_read_3",
      title: "Artificial Intelligence in Modern Medical Diagnostics",
      band: "8.0",
      topic: "Technology & Healthcare",
      passage: `The integration of deep learning algorithms into diagnostic radiology marks a transformative era in healthcare. Computer vision models trained on extensive repositories of annotated scans can identify subtle pathology—such as early-stage pulmonary nodules or retinal abnormalities—with accuracy rates often surpassing human specialists. Consequently, clinicians can detect disease precursors earlier, substantially improving diagnostic triage.

However, the deployment of clinical AI is accompanied by significant ethical and operational hurdles. Notably, the 'black-box' nature of neural networks obscures how decisions are derived, challenging accountability in clinical negligence claims. Healthcare institutions must implement explainable AI (XAI) frameworks and validate algorithms across diverse patient demographics to eliminate diagnostic bias.`,
      vocabularyHighlights: [
        { word: "pathology", meaning: "bệnh lý học, dấu hiệu bệnh", type: "noun", cefr: "C1" },
        { word: "precursors", meaning: "dấu hiệu tiền thân, chỉ báo sớm", type: "noun", cefr: "C2" },
        { word: "triage", meaning: "sự phân loại ưu tiên cấp cứu/điều trị", type: "noun", cefr: "C1" },
        { word: "obscures", meaning: "làm mờ mịt, che khuất", type: "verb", cefr: "C1" }
      ],
      questions: [
        {
          id: "ir_3_q1",
          type: "multiple_choice",
          questionText: "Why is the 'black-box' nature of neural networks a challenge in healthcare?",
          options: [
            { label: "A", text: "It prevents hardware scanners from capturing clear images." },
            { label: "B", text: "It obscures how algorithmic conclusions are reached, raising accountability issues." },
            { label: "C", text: "It requires clinicians to manually annotate every patient scan." },
            { label: "D", text: "It makes diagnostic software run slower on hospital computers." }
          ],
          correctAnswer: "B",
          explanation: "Bài đọc chỉ rõ: 'the black-box nature of neural networks obscures how decisions are derived, challenging accountability in clinical negligence claims.'"
        },
        {
          id: "ir_3_q2",
          type: "true_false_not_given",
          questionText: "AI models in radiology have shown accuracy rates that can exceed those of human specialists.",
          options: [
            { label: "TRUE", text: "TRUE - Đồng ý với thông tin trong bài" },
            { label: "FALSE", text: "FALSE - Trái ngược với thông tin trong bài" },
            { label: "NOT GIVEN", text: "NOT GIVEN - Không được đề cập" }
          ],
          correctAnswer: "TRUE",
          explanation: "Đoạn 1 viết: 'with accuracy rates often surpassing human specialists.'"
        }
      ]
    },
    {
      id: "ielts_read_4",
      title: "Marine Biodiversity and Coral Reef Restoration",
      band: "8.0",
      topic: "Environment & Marine Biology",
      passage: `Coral reefs comprise less than one percent of the ocean floor yet sustain approximately one-quarter of all marine biodiversity. Anthropogenic climate change, manifested primarily through oceanic acidification and rising thermal baselines, has triggered widespread coral bleaching events. During bleaching, corals expel their symbiotic zooxanthellae algae, depriving them of primary nutrients and rendering the skeletal structure white.

In response, marine conservationists are pioneering innovative restoration interventions, including micro-fragmentation and assisted evolution. By selectively breeding thermotolerant coral cultivars in underwater nurseries before outplanting them onto degraded reefs, scientists aim to bolster ecosystem resilience against projected sea-temperature anomalies.`,
      vocabularyHighlights: [
        { word: "anthropogenic", meaning: "do con người gây ra", type: "adj", cefr: "C2" },
        { word: "symbiotic", meaning: "cộng sinh", type: "adj", cefr: "C1" },
        { word: "thermotolerant", meaning: "khả năng chịu nhiệt cao", type: "adj", cefr: "C2" },
        { word: "bolster", meaning: "củng cố, tăng cường", type: "verb", cefr: "C1" }
      ],
      questions: [
        {
          id: "ir_4_q1",
          type: "multiple_choice",
          questionText: "What happens during a coral bleaching event?",
          options: [
            { label: "A", text: "Corals absorb too much zooxanthellae algae and turn darker." },
            { label: "B", text: "Corals expel symbiotic algae, lose nutrients, and turn white." },
            { label: "C", text: "Corals migrate to deeper oceanic trenches to escape heat." },
            { label: "D", text: "Corals grow a protective shell that blocks sunlight." }
          ],
          correctAnswer: "B",
          explanation: "Đoạn 1 nêu: 'During bleaching, corals expel their symbiotic zooxanthellae algae... rendering the skeletal structure white.'"
        },
        {
          id: "ir_4_q2",
          type: "true_false_not_given",
          questionText: "Coral reefs occupy more than five percent of the total oceanic seafloor.",
          options: [
            { label: "TRUE", text: "TRUE - Đồng ý với thông tin trong bài" },
            { label: "FALSE", text: "FALSE - Trái ngược với thông tin trong bài" },
            { label: "NOT GIVEN", text: "NOT GIVEN - Không được đề cập" }
          ],
          correctAnswer: "FALSE",
          explanation: "Bài đọc nói rõ: 'Coral reefs comprise less than one percent of the ocean floor...'"
        }
      ]
    },
    {
      id: "ielts_read_5",
      title: "The Architecture of Ancient Civilizations: Water Management in Angkor",
      band: "7.5",
      topic: "History & Archaeology",
      passage: `The Khmer Empire of Angkor, flourishing from the 9th to the 15th centuries in modern-day Cambodia, represents one of the most sophisticated hydraulic civilizations in human history. To overcome the seasonal monsoon climate—characterized by intense summer rains and prolonged winter droughts—Khmer engineers constructed an intricate network of barays (vast artificial reservoirs), canals, and spillways.

This hydraulic infrastructure served a dual purpose: mitigating flood risks during the monsoon and ensuring continuous irrigation for rice agriculture during dry seasons. Archaeological LiDAR surveys reveal that the eventual decline of Angkor was accelerated by severe ecological stress and prolonged megadroughts that overwhelmed the capacity of this monumental water-management network.`,
      vocabularyHighlights: [
        { word: "hydraulic", meaning: "thuộc về thủy lợi, thủy lực", type: "adj", cefr: "C1" },
        { word: "intricate", meaning: "phức tạp, tinh xảo", type: "adj", cefr: "C1" },
        { word: "prolonged", meaning: "kéo dài, triền miên", type: "adj", cefr: "B2" },
        { word: "monumental", meaning: "vĩ đại, đồ sộ", type: "adj", cefr: "C1" }
      ],
      questions: [
        {
          id: "ir_5_q1",
          type: "multiple_choice",
          questionText: "What was the dual purpose of Angkor's hydraulic infrastructure?",
          options: [
            { label: "A", text: "To protect temples from enemy invasions and supply drinking water to royalty." },
            { label: "B", text: "To prevent monsoon floods and provide year-round irrigation for rice agriculture." },
            { label: "C", text: "To generate mechanical power and transport building stones." },
            { label: "D", text: "To drain swampy marshlands and construct trading ports." }
          ],
          correctAnswer: "B",
          explanation: "Đoạn 2 chỉ rõ: 'mitigating flood risks during the monsoon and ensuring continuous irrigation for rice agriculture during dry seasons.'"
        },
        {
          id: "ir_5_q2",
          type: "true_false_not_given",
          questionText: "LiDAR surveys suggest that extreme weather fluctuations contributed to Angkor's eventual decline.",
          options: [
            { label: "TRUE", text: "TRUE - Đồng ý với thông tin trong bài" },
            { label: "FALSE", text: "FALSE - Trái ngược với thông tin trong bài" },
            { label: "NOT GIVEN", text: "NOT GIVEN - Không được đề cập" }
          ],
          correctAnswer: "TRUE",
          explanation: "Đoạn 2 nêu: 'eventual decline of Angkor was accelerated by severe ecological stress and prolonged megadroughts...'"
        }
      ]
    },
    {
      id: "ielts_read_6",
      title: "The Neuroscience of Bilingual Language Acquisition",
      band: "8.5",
      topic: "Science & Linguistics",
      passage: `Neuroimaging studies of bilingual individuals reveal profound structural and functional adaptations within the human brain, a phenomenon known as neuroplasticity. When children acquire two languages simultaneously from infancy, their cerebral cortices exhibit increased grey matter density in the inferior parietal cortex and enhanced connectivity in prefrontal executive control networks.

Unlike monolingual speakers, bilinguals continuously inhibit one language system while activating the other. This constant executive monitoring strengthens cognitive control, improving mental flexibility, task-switching proficiency, and attentional focus. Clinical longitudinal studies even suggest that lifelong bilingualism may delay the clinical onset of neurodegenerative disorders such as Alzheimer's disease by approximately four to five years.`,
      vocabularyHighlights: [
        { word: "neuroplasticity", meaning: "tính linh hoạt/tách nhập của thần kinh não bộ", type: "noun", cefr: "C2" },
        { word: "simultaneously", meaning: "đồng thời, cùng một lúc", type: "adv", cefr: "C1" },
        { word: "inhibit", meaning: "ức chế, kìm hãm", type: "verb", cefr: "C1" },
        { word: "longitudinal", meaning: "theo dõi dọc thời gian dài", type: "adj", cefr: "C2" }
      ],
      questions: [
        {
          id: "ir_6_q1",
          type: "multiple_choice",
          questionText: "How does bilingualism enhance prefrontal executive control networks in the brain?",
          options: [
            { label: "A", text: "By eliminating the need to process grammar in the second language." },
            { label: "B", text: "By requiring continuous inhibition of one language while activating the other." },
            { label: "C", text: "By expanding visual processing areas of the occipital lobe." },
            { label: "D", text: "By reducing grey matter density in parietal regions." }
          ],
          correctAnswer: "B",
          explanation: "Đoạn 2 nêu: 'bilinguals continuously inhibit one language system while activating the other. This constant executive monitoring strengthens cognitive control...'"
        },
        {
          id: "ir_6_q2",
          type: "true_false_not_given",
          questionText: "Lifelong bilingualism can postpone the initial clinical symptoms of Alzheimer's disease.",
          options: [
            { label: "TRUE", text: "TRUE - Đồng ý với thông tin trong bài" },
            { label: "FALSE", text: "FALSE - Trái ngược với thông tin trong bài" },
            { label: "NOT GIVEN", text: "NOT GIVEN - Không được đề cập" }
          ],
          correctAnswer: "TRUE",
          explanation: "Bài đọc viết: 'may delay the clinical onset of neurodegenerative disorders such as Alzheimer's disease by approximately four to five years.'"
        }
      ]
    },
    {
      id: "ielts_read_7",
      title: "Sustainable Agriculture and Vertical Farming in Megacities",
      band: "7.5",
      topic: "Agriculture & Urbanism",
      passage: `As global population projections approach ten billion by 2050, conventional horizontal agriculture faces insurmountable terrestrial land constraints. Vertical farming—the cultivation of crops in vertically stacked layers inside climate-controlled facilities—offers an innovative agricultural alternative for urban megacities. Utilizing hydroponic and aeroponic growth systems, vertical farms consume up to ninety-five percent less agricultural water than conventional open-field farming.

Moreover, because indoor vertical farms operate in sealed, pest-free environments, they eliminate the necessity for chemical pesticides and herbicides. By situating food production within urban distribution centers, municipalities drastically reduce food miles, food waste during transit, and associated transport greenhouse gas emissions.`,
      vocabularyHighlights: [
        { word: "insurmountable", meaning: "không thể vượt qua được", type: "adj", cefr: "C2" },
        { word: "hydroponic", meaning: "thủy canh (trồng cây trong nước khoáng)", type: "adj", cefr: "C1" },
        { word: "aeroponic", meaning: "khí canh (trồng cây bằng sương khoáng)", type: "adj", cefr: "C2" },
        { word: "herbicides", meaning: "thuốc diệt cỏ", type: "noun", cefr: "C1" }
      ],
      questions: [
        {
          id: "ir_7_q1",
          type: "multiple_choice",
          questionText: "Why do vertical farms require significantly less water than conventional outdoor farms?",
          options: [
            { label: "A", text: "Because crops are grown exclusively during rainy seasons." },
            { label: "B", text: "Because they utilize efficient hydroponic and aeroponic nutrient systems." },
            { label: "C", text: "Because genetically modified seeds do not need moisture." },
            { label: "D", text: "Because artificial LED lighting eliminates plant transpiration." }
          ],
          correctAnswer: "B",
          explanation: "Đoạn 1 nêu: 'Utilizing hydroponic and aeroponic growth systems, vertical farms consume up to ninety-five percent less agricultural water...'"
        },
        {
          id: "ir_7_q2",
          type: "true_false_not_given",
          questionText: "Vertical farming facilities require heavy use of chemical pesticides to prevent insect infestations.",
          options: [
            { label: "TRUE", text: "TRUE - Đồng ý với thông tin trong bài" },
            { label: "FALSE", text: "FALSE - Trái ngược với thông tin trong bài" },
            { label: "NOT GIVEN", text: "NOT GIVEN - Không được đề cập" }
          ],
          correctAnswer: "FALSE",
          explanation: "Bài đọc nói ngược lại: 'operate in sealed, pest-free environments, they eliminate the necessity for chemical pesticides...'"
        }
      ]
    },
    {
      id: "ielts_read_8",
      title: "The Impact of Microplastics on Global Ocean Ecosystems",
      band: "8.0",
      topic: "Environment & Ecology",
      passage: `Microplastics—synthetic polymer fragments smaller than five millimeters in diameter—have become ubiquitous contaminants throughout aquatic marine environments, ranging from coastal surface estuaries to the Mariana Trench. These micro-particles originate from the ultraviolet degradation of larger consumer plastics, synthetic textile laundry effluent, and industrial abrasive scrubbers.

Because microplastics possess hydrophobic surface properties, they readily adsorb persistent organic pollutants (POPs) floating in seawater. When ingested by zooplankton and small planktivorous fish, these toxic chemical contaminants bioaccumulate up the marine trophic ladder, posing toxicological risks to Apex predators and seafood-consuming human populations.`,
      vocabularyHighlights: [
        { word: "ubiquitous", meaning: "có mặt ở khắp nơi, tràn ngập", type: "adj", cefr: "C1" },
        { word: "degradation", meaning: "sự phân hủy, thoái hóa", type: "noun", cefr: "C1" },
        { word: "bioaccumulate", meaning: "tích tụ sinh học trong chuỗi thức ăn", type: "verb", cefr: "C2" },
        { word: "trophic", meaning: "thuộc chuỗi/bậc dinh dưỡng sinh thái", type: "adj", cefr: "C2" }
      ],
      questions: [
        {
          id: "ir_8_q1",
          type: "multiple_choice",
          questionText: "Why do microplastics carry high concentrations of persistent organic pollutants (POPs)?",
          options: [
            { label: "A", text: "Because their hydrophobic surface properties cause them to adsorb marine chemical toxins." },
            { label: "B", text: "Because manufacturers deliberately inject POPs into plastic water bottles." },
            { label: "C", text: "Because zooplankton secrete POPs when feeding on microplastics." },
            { label: "D", text: "Because ultraviolet sunlight converts pure seawater into toxic chemicals." }
          ],
          correctAnswer: "A",
          explanation: "Đoạn 2 nêu rõ: 'Because microplastics possess hydrophobic surface properties, they readily adsorb persistent organic pollutants (POPs)...'"
        },
        {
          id: "ir_8_q2",
          type: "true_false_not_given",
          questionText: "Microplastics have only been discovered in shallow coastal surface waters.",
          options: [
            { label: "TRUE", text: "TRUE - Đồng ý với thông tin trong bài" },
            { label: "FALSE", text: "FALSE - Trái ngược với thông tin trong bài" },
            { label: "NOT GIVEN", text: "NOT GIVEN - Không được đề cập" }
          ],
          correctAnswer: "FALSE",
          explanation: "Bài viết nói rõ: 'ranging from coastal surface estuaries to the Mariana Trench' (khắp nơi từ cửa sông đến rãnh Mariana sâu nhất)."
        }
      ]
    },
    {
      id: "ielts_read_9",
      title: "The Rise of Telework and the Reinvention of Corporate Culture",
      band: "7.5",
      topic: "Business & Sociology",
      passage: `The rapid democratization of digital communication protocols and cloud collaboration suites has catalyzed a lasting paradigm shift toward distributed telework. While historically perceived as a temporary accommodation, hybrid working models have demonstrated empirical improvements in employee productivity and job satisfaction by eliminating tedious vehicular commutes.

However, organizations face novel challenges in preserving corporate cohesion and informal innovation. Spontaneous hallway encounters and organic mentorship—traditionally facilitated by physical co-location—require deliberate digital re-engineering through virtual co-working spaces and asynchronous knowledge repositories.`,
      vocabularyHighlights: [
        { word: "democratization", meaning: "sự phổ biến rộng rãi cho mọi người", type: "noun", cefr: "C1" },
        { word: "empirical", meaning: "dựa trên thực nghiệm/thực tế chứng minh", type: "adj", cefr: "C1" },
        { word: "cohesion", meaning: "sự gắn kết, đoàn kết tập thể", type: "noun", cefr: "C1" },
        { word: "asynchronous", meaning: "bất đồng bộ (không diễn ra cùng lúc)", type: "adj", cefr: "C1" }
      ],
      questions: [
        {
          id: "ir_9_q1",
          type: "multiple_choice",
          questionText: "According to the passage, what is one major benefit of hybrid telework?",
          options: [
            { label: "A", text: "It reduces hardware costs for software developers." },
            { label: "B", text: "It improves employee productivity and satisfaction by eliminating daily commutes." },
            { label: "C", text: "It guarantees that employees work more hours on weekends." },
            { label: "D", text: "It removes the need for any corporate knowledge repositories." }
          ],
          correctAnswer: "B",
          explanation: "Đoạn 1 nêu: 'demonstrated empirical improvements in employee productivity and job satisfaction by eliminating tedious vehicular commutes.'"
        },
        {
          id: "ir_9_q2",
          type: "true_false_not_given",
          questionText: "Spontaneous hallway mentorship happens naturally and effortlessly in remote digital environments.",
          options: [
            { label: "TRUE", text: "TRUE - Đồng ý với thông tin trong bài" },
            { label: "FALSE", text: "FALSE - Trái ngược với thông tin trong bài" },
            { label: "NOT GIVEN", text: "NOT GIVEN - Không được đề cập" }
          ],
          correctAnswer: "FALSE",
          explanation: "Bài đọc nói ngược lại: 'require deliberate digital re-engineering through virtual co-working spaces...' (cần thiết kế lại có chủ đích chứ không tự nhiên)."
        }
      ]
    },
    {
      id: "ielts_read_10",
      title: "Space Exploration: The Economics of Asteroid Mining",
      band: "8.5",
      topic: "Science & Economics",
      passage: `Near-Earth asteroids represent vast, unexploited repositories of platinum-group metals, cobalt, and volatile resources such as water ice. As terrestrial high-grade ore reserves become progressively depleted, commercial space enterprises are formulating robotic asteroid extraction missions. Water ice harvested from carbonaceous chondrites is particularly valuable, as it can be electrolyzed into liquid hydrogen and oxygen propellant for deep-space refueling depots.

Nevertheless, commercial space mining faces complex economic and legal uncertainties. Under the 1967 Outer Space Treaty, celestial bodies cannot be claimed as national territory, creating legal ambiguity regarding private ownership of extraterrestrial mineral extraction. Furthermore, an influx of space-harvested precious metals could destabilize global commodity pricing structures on Earth.`,
      vocabularyHighlights: [
        { word: "carbonaceous", meaning: "chứa nhiều carbon", type: "adj", cefr: "C2" },
        { word: "electrolyzed", meaning: "được điện phân", type: "verb", cefr: "C2" },
        { word: "extraterrestrial", meaning: "ngoài Trái Đất, ngoại hành tinh", type: "adj", cefr: "C1" },
        { word: "destabilize", meaning: "làm mất ổn định", type: "verb", cefr: "C1" }
      ],
      questions: [
        {
          id: "ir_10_q1",
          type: "multiple_choice",
          questionText: "Why is water ice on asteroids considered especially valuable for space missions?",
          options: [
            { label: "A", text: "It can be cooled to refrigerate scientific instruments." },
            { label: "B", text: "It can be electrolyzed into hydrogen and oxygen rocket propellant." },
            { label: "C", text: "It is the only material that shields astronauts from solar radiation." },
            { label: "D", text: "It can be transported to Earth to replace ocean water." }
          ],
          correctAnswer: "B",
          explanation: "Đoạn 1 nêu rõ: 'can be electrolyzed into liquid hydrogen and oxygen propellant for deep-space refueling depots.'"
        },
        {
          id: "ir_10_q2",
          type: "true_false_not_given",
          questionText: "The 1967 Outer Space Treaty clearly grants private corporations ownership of asteroid territories.",
          options: [
            { label: "TRUE", text: "TRUE - Đồng ý với thông tin trong bài" },
            { label: "FALSE", text: "FALSE - Trái ngược với thông tin trong bài" },
            { label: "NOT GIVEN", text: "NOT GIVEN - Không được đề cập" }
          ],
          correctAnswer: "FALSE",
          explanation: "Bài viết nói: 'celestial bodies cannot be claimed as national territory, creating legal ambiguity regarding private ownership...'"
        }
      ]
    }
  ],
  listening: [
    {
      id: "ielts_list_1",
      title: "Academic Lecture - Sustainable Urban Planning",
      speaker: "Professor Jonathan Vance",
      audioScript: "Good morning everyone. Today we are continuing our lecture series on environmental urbanism by examining how European cities are re-engineering public transportation. In particular, we will focus on Copenhagen's ambitious bicycle superhighway initiative. Now, traditional bicycle lanes are often disjointed and disrupted by traffic signals. However, Copenhagen's cycle superhighways are designed for long-distance commuters travelling over ten kilometers. They feature synchronized green traffic lights—known as the 'green wave'—which allow cyclists riding at twenty kilometers per hour to pass through intersections without stopping. Consequently, over forty-five percent of commuters in the city now travel by bicycle, significantly cutting municipal carbon emissions.",
      translation: "Chào buổi sáng các bạn. Hôm nay chúng ta tiếp tục chuỗi bài giảng về quy hoạch đô thị môi trường bằng cách xem xét cách các thành phố châu Âu đang tái thiết kế giao thông công cộng. Cụ thể, chúng ta sẽ tập trung vào sáng kiến siêu cao tốc dành cho xe đạp đầy tham vọng của Copenhagen. Thông thường, các làn đường xe đạp truyền thống thường bị rời rạc và bị gián đoạn bởi đèn tín hiệu giao thông. Tuy nhiên, các siêu cao tốc xe đạp của Copenhagen được thiết kế cho người đi làm đường dài trên 10 km. Chúng có hệ thống đèn xanh đồng bộ—gọi là 'làn sóng xanh'—cho phép người đi xe đạp với tốc độ 20 km/h đi qua các nút giao mà không cần dừng lại. Do đó, hơn 45% người đi làm trong thành phố hiện di chuyển bằng xe đạp, cắt giảm đáng kể lượng khí thải carbon.",
      questions: [
        {
          id: "il_1_q1",
          questionText: "What is the primary feature of the 'green wave' in Copenhagen's cycle superhighways?",
          options: [
            { label: "A", text: "Free electric bicycle charging stations" },
            { label: "B", text: "Synchronized green traffic lights for continuous cycling" },
            { label: "C", text: "Underground tunnels specifically for cyclists" },
            { label: "D", text: "Priority parking spaces at train stations" }
          ],
          correctAnswer: "B",
          explanation: "Bài nghe nói rõ: 'They feature synchronized green traffic lights—known as the 'green wave'—which allow cyclists... to pass through intersections without stopping'."
        },
        {
          id: "il_1_q2",
          questionText: "What percentage of commuters in Copenhagen currently travel by bicycle?",
          options: [
            { label: "A", text: "Over 20 percent" },
            { label: "B", text: "Exactly 35 percent" },
            { label: "C", text: "Over 45 percent" },
            { label: "D", text: "Nearly 60 percent" }
          ],
          correctAnswer: "C",
          explanation: "Giáo sư nói: 'Consequently, over forty-five percent of commuters in the city now travel by bicycle'."
        }
      ]
    },
    {
      id: "ielts_list_2",
      title: "University Library Orientation and Digital Archives",
      speaker: "Ms. Eleanor Vance - Library Director",
      audioScript: "Welcome to the University Central Library orientation. As postgraduate researchers, your primary resource will be our digital archive portal rather than the physical stacks on levels two and three. Through our academic consortium membership, you have full remote access to over eighty thousand peer-reviewed journals and historical manuscript scans dating back to the eighteenth century. To access protected databases off-campus, you must authenticate using your institutional student ID and multi-factor security token. Please remember that interlibrary loan requests for rare physical volumes require at least three working days for fulfillment.",
      translation: "Chào mừng đến với buổi hướng dẫn Thư viện Trung tâm Đại học. Là nghiên cứu sinh sau đại học, nguồn tài nguyên chính của bạn sẽ là cổng lưu trữ kỹ thuật số chứ không phải kệ sách vật lý ở tầng hai và tầng ba. Thông qua tư cách thành viên liên hiệp học thuật, bạn có quyền truy cập từ xa vào hơn 80.000 tạp chí phản biện và bản thảo lịch sử từ thế kỷ 18. Để truy cập ngoài khuôn viên trường, bạn phải xác thực bằng ID sinh viên và mã bảo mật hai lớp. Vui lòng nhớ rằng yêu cầu mượn liên thư viện cho sách hiếm cần ít nhất 3 ngày làm việc để xử lý.",
      questions: [
        {
          id: "il_2_q1",
          questionText: "What is required to access protected library databases from off-campus?",
          options: [
            { label: "A", text: "A printed library membership card and passport" },
            { label: "B", text: "An institutional student ID and multi-factor security token" },
            { label: "C", text: "A written recommendation from a professor" },
            { label: "D", text: "An annual digital subscription payment" }
          ],
          correctAnswer: "B",
          explanation: "Bài nói nêu rõ: 'you must authenticate using your institutional student ID and multi-factor security token.'"
        },
        {
          id: "il_2_q2",
          questionText: "How long do interlibrary loan requests for rare physical volumes take to process?",
          options: [
            { label: "A", text: "One working day" },
            { label: "B", text: "At least three working days" },
            { label: "C", text: "One full week" },
            { label: "D", text: "Ten business days" }
          ],
          correctAnswer: "B",
          explanation: "Diễn giả nhắc nhở: 'require at least three working days for fulfillment.'"
        }
      ]
    },
    {
      id: "ielts_list_3",
      title: "Research Seminar on Urban Climate Resilience",
      speaker: "Dr. Marcus Thorne",
      audioScript: "In today's seminar, we examine how coastal municipalities are adapting to rising sea levels through nature-based coastal engineering. Traditionally, cities constructed rigid concrete seawalls, but these barriers often disrupt natural sediment transport and degrade over time. In contrast, Rotterdam and Singapore are constructing living breakwaters using engineered mangrove forests and salt marshes. Our recent hydrodynamic simulations demonstrate that a hundred-meter-wide mangrove belt can dissipate wave energy by up to sixty-six percent during severe storm surges, while simultaneously creating essential nursery habitats for marine biodiversity.",
      translation: "Trong buổi hội thảo hôm nay, chúng ta xem xét cách các đô thị ven biển thích ứng với nước biển dâng thông qua kỹ thuật bờ biển dựa vào thiên nhiên. Trước đây, các thành phố xây đê biển bằng bê tông cứng, nhưng các rào cản này làm gián đoạn sự vận chuyển bùn cát tự nhiên và xuống cấp theo thời gian. Ngược lại, Rotterdam và Singapore đang xây dựng đê chắn sóng sống bằng rừng ngập mặn và đầm lầy muối. Mô phỏng thủy động lực học cho thấy dải rừng ngập mặn rộng 100 mét có thể triệt tiêu năng lượng sóng lên tới 66% trong bão, đồng thời tạo môi trường sinh sống cho sinh vật biển.",
      questions: [
        {
          id: "il_3_q1",
          questionText: "Why are living breakwaters considered superior to traditional concrete seawalls?",
          options: [
            { label: "A", text: "They are completely invisible from the shoreline." },
            { label: "B", text: "They dissipate wave energy effectively without disrupting natural habitats." },
            { label: "C", text: "They can be built in less than one week." },
            { label: "D", text: "They prevent ocean tides from entering bays entirely." }
          ],
          correctAnswer: "B",
          explanation: "Diễn giả giải thích: 'can dissipate wave energy by up to sixty-six percent... while simultaneously creating essential nursery habitats.'"
        },
        {
          id: "il_3_q2",
          questionText: "By how much can a hundred-meter-wide mangrove belt reduce wave energy during storm surges?",
          options: [
            { label: "A", text: "Up to 33 percent" },
            { label: "B", text: "Up to 50 percent" },
            { label: "C", text: "Up to 66 percent" },
            { label: "D", text: "Up to 90 percent" }
          ],
          correctAnswer: "C",
          explanation: "Bài nghe nói: 'can dissipate wave energy by up to sixty-six percent during severe storm surges.'"
        }
      ]
    },
    {
      id: "ielts_list_4",
      title: "Student Exchange Program Information Session",
      speaker: "Coordinator Sarah Jenkins",
      audioScript: "Good afternoon. If you are interested in applying for the Semester Abroad exchange program for the upcoming autumn term, please note three critical deadlines. First, your initial application form and academic transcript must be submitted online by October 15th. Second, candidates applying to non-English speaking universities must provide valid B2-level language proficiency certificates by November 1st. Finally, scholarship award interviews will take place during the third week of November in Room 402 of the International Center.",
      translation: "Chào buổi chiều. Nếu bạn quan tâm tham gia chương trình trao đổi học kỳ ở nước ngoài cho học kỳ mùa thu tới, vui lòng lưu ý ba mốc thời gian quan trọng. Thứ nhất, đơn đăng ký và bảng điểm học tập phải nộp trực tuyến trước ngày 15/10. Thứ hai, ứng viên đăng ký các trường không nói tiếng Anh phải nộp chứng chỉ ngoại ngữ mức B2 trước ngày 1/11. Cuối cùng, phỏng vấn học bổng sẽ diễn ra vào tuần thứ ba của tháng 11 tại Phòng 402 Trung tâm Quốc tế.",
      questions: [
        {
          id: "il_4_q1",
          questionText: "What is the deadline for submitting the initial application and academic transcript?",
          options: [
            { label: "A", text: "October 1st" },
            { label: "B", text: "October 15th" },
            { label: "C", text: "November 1st" },
            { label: "D", text: "November 15th" }
          ],
          correctAnswer: "B",
          explanation: "Diễn giả nói rõ: 'your initial application form and academic transcript must be submitted online by October 15th.'"
        },
        {
          id: "il_4_q2",
          questionText: "What language requirement applies to candidates going to non-English speaking universities?",
          options: [
            { label: "A", text: "A valid B2-level language proficiency certificate" },
            { label: "B", text: "An IELTS Band 8.0 certificate" },
            { label: "C", text: "A basic beginner language attendance letter" },
            { label: "D", text: "No language certificate is required" }
          ],
          correctAnswer: "A",
          explanation: "Bài nghe nói: 'must provide valid B2-level language proficiency certificates by November 1st.'"
        }
      ]
    },
    {
      id: "ielts_list_5",
      title: "Biology Lecture: Migration Patterns of Monarch Butterflies",
      speaker: "Prof. David Atten",
      audioScript: "Let us turn our attention to the annual migration of the North American Monarch butterfly. This remarkable journey spans over four thousand kilometers from Canada to the mountainous fir forests of central Mexico. What makes this biological phenomenon extraordinary is that no single individual butterfly completes the entire round trip. Instead, the migration is accomplished across four successive generations. The fourth generation, known as the 'Methuselah generation', enters a state of reproductive dormancy that allows them to live up to eight months—over eight times longer than summer generations.",
      translation: "Hãy cùng chú ý đến cuộc di cư hàng năm của loài bướm chúa Bắc Mỹ. Hành trình đáng kinh ngạc này kéo dài hơn 4.000 km từ Canada đến các khu rừng thông núi ở miền trung Mexico. Điều làm cho hiện tượng sinh học này trở nên phi thường là không có con bướm cá thể nào hoàn thành toàn bộ chuyến đi khứ hồi. Thay vào đó, cuộc di cư được thực hiện qua 4 thế hệ liên tiếp. Thế hệ thứ tư, gọi là 'thế hệ Methuselah', bước vào trạng thái ngủ đông sinh sản cho phép chúng sống tới 8 tháng—lâu hơn 8 lần so với thế hệ mùa hè.",
      questions: [
        {
          id: "il_5_q1",
          questionText: "How many generations of monarch butterflies are needed to complete the full migration cycle?",
          options: [
            { label: "A", text: "Two generations" },
            { label: "B", text: "Three generations" },
            { label: "C", text: "Four generations" },
            { label: "D", text: "Six generations" }
          ],
          correctAnswer: "C",
          explanation: "Giáo sư nói: 'the migration is accomplished across four successive generations.'"
        },
        {
          id: "il_5_q2",
          questionText: "What enables the fourth 'Methuselah generation' to live up to eight months?",
          options: [
            { label: "A", text: "They feed exclusively on tropical fruit nectar." },
            { label: "B", text: "They enter a state of reproductive dormancy." },
            { label: "C", text: "They stay inside heated artificial greenhouse pods." },
            { label: "D", text: "They possess double the wing surface area of summer butterflies." }
          ],
          correctAnswer: "B",
          explanation: "Bài nghe giải thích: 'enters a state of reproductive dormancy that allows them to live up to eight months...'"
        }
      ]
    },
    {
      id: "ielts_list_6",
      title: "Business Incubation Workshop: Pitching to Investors",
      speaker: "Michael Chang - Venture Capitalist",
      audioScript: "When pitching your startup venture to institutional investors, the most critical element is not your financial projection spreadsheet, but your clear articulation of customer acquisition cost versus lifetime customer value. Too many technical founders spend twenty minutes explaining their software architecture while neglecting their market go-to-market distribution channel. In a ten-minute pitch deck, allocate at least three minutes to demonstrating evidence of product-market fit through active pilot tests or signed letters of intent from early enterprise buyers.",
      translation: "Khi trình bày dự án khởi nghiệp với các nhà đầu tư tổ chức, yếu tố quan trọng nhất không phải là bảng tính dự phóng tài chính, mà là sự giải thích rõ ràng về chi phí thu hút khách hàng so với giá trị trọn đời của khách hàng. Quá nhiều nhà sáng lập kỹ thuật dành 20 phút giải thích kiến trúc phần mềm mà bỏ qua kênh phân phối ra thị trường. Trong bài thuyết trình 10 phút, hãy dành ít nhất 3 phút chứng minh sự phù hợp với thị trường qua các thử nghiệm thực tế hoặc thư ngỏ mua hàng từ các doanh nghiệp ban đầu.",
      questions: [
        {
          id: "il_6_q1",
          questionText: "According to Michael Chang, what is the most critical element when pitching to investors?",
          options: [
            { label: "A", text: "Detailed ten-year financial spreadsheet models" },
            { label: "B", text: "Clear articulation of customer acquisition cost versus lifetime value" },
            { label: "C", text: "Complex diagrams of backend software architecture" },
            { label: "D", text: "A recommendation letter from a university dean" }
          ],
          correctAnswer: "B",
          explanation: "Diễn giả nhấn mạnh: 'the most critical element is not your financial projection spreadsheet, but your clear articulation of customer acquisition cost versus lifetime customer value.'"
        },
        {
          id: "il_6_q2",
          questionText: "How much time should founders allocate to demonstrating product-market fit in a ten-minute pitch?",
          options: [
            { label: "A", text: "At least one minute" },
            { label: "B", text: "At least three minutes" },
            { label: "C", text: "Exactly five minutes" },
            { label: "D", text: "The entire ten minutes" }
          ],
          correctAnswer: "B",
          explanation: "Bài nghe khuyên: 'In a ten-minute pitch deck, allocate at least three minutes to demonstrating evidence of product-market fit...'"
        }
      ]
    },
    {
      id: "ielts_list_7",
      title: "Museum Guided Tour: The Bronze Age Exhibition",
      speaker: "Curator Elena Rostova",
      audioScript: "Welcome to Gallery B, showcasing our newly curated Bronze Age Mediterranean collection. The centerpiece displayed in the glass cabinet before you is the Mycenaean Ceremonial Dagger, forged around fourteen hundred BCE. Notice the intricate inlay work along the copper blade—the craftsmen used a technique called 'niello', fusing silver and gold alloy to depict a lion hunt. Interestingly, chemical isotope analysis of the copper ingots proves that the raw metal was imported via maritime trade routes from Cyprus, illustrating how interconnected ancient Mediterranean trade networks were over three thousand years ago.",
      translation: "Chào mừng đến với Phòng trưng bày B, giới thiệu bộ sưu tập Địa Trung Hải thời kỳ Đồ đồng mới được tuyển chọn. Tác phẩm trung tâm trong tủ kính trước mặt quý vị là Dao găm nghi lễ Mycenae, được rèn vào khoảng năm 1400 trước Công nguyên. Hãy để ý hoa văn khảm tinh xảo dọc lưỡi đồng—các thợ thủ công đã dùng kỹ thuật 'niello', dung hợp hợp kim vàng bạc để miêu tả cảnh săn sư tử. Thú vị là, phân tích đồng vị hóa học cho thấy kim loại thô được nhập khẩu qua tuyến đường biển từ Cyprus, cho thấy mạng lưới thương mại cổ đại kết nối rộng rãi thế nào từ 3000 năm trước.",
      questions: [
        {
          id: "il_7_q1",
          questionText: "What decorative technique was used to inlay silver and gold on the Mycenaean dagger blade?",
          options: [
            { label: "A", text: "Fresco painting" },
            { label: "B", text: "Niello inlay technique" },
            { label: "C", text: "Electroplate soldering" },
            { label: "D", text: "Ceramic glazing" }
          ],
          correctAnswer: "B",
          explanation: "Người hướng dẫn nói: 'the craftsmen used a technique called 'niello', fusing silver and gold alloy to depict a lion hunt.'"
        },
        {
          id: "il_7_q2",
          questionText: "What did chemical isotope analysis reveal about the copper used in the dagger?",
          options: [
            { label: "A", text: "It was mined in nearby hills surrounding the temple." },
            { label: "B", text: "It was imported via maritime trade routes from Cyprus." },
            { label: "C", text: "It was recycled from Roman bronze coins." },
            { label: "D", text: "It was synthesized using ancient alchemy." }
          ],
          correctAnswer: "B",
          explanation: "Bài nghe nêu: 'proves that the raw metal was imported via maritime trade routes from Cyprus...'"
        }
      ]
    },
    {
      id: "ielts_list_8",
      title: "Environmental Engineering Lecture: Desalination Technologies",
      speaker: "Prof. Henrik Larsson",
      audioScript: "Good morning. Today we analyze seawater reverse osmosis, or SWRO, which currently provides drinking water for over three hundred million people worldwide. While modern energy recovery devices have reduced SWRO electrical energy consumption from twelve kilowatt-hours per cubic meter down to just two point five kilowatt-hours, significant ecological concerns persist regarding brine disposal. Highly concentrated hyper-saline brine discharged directly into coastal lagoons can sink and suffocate benthic marine ecosystems due to its high density and low dissolved oxygen content.",
      translation: "Chào buổi sáng. Hôm nay chúng ta phân tích công nghệ thẩm thấu ngược nước biển (SWRO), hiện cung cấp nước uống cho hơn 300 triệu người trên thế giới. Mặc dù các thiết bị thu hồi năng lượng hiện đại đã giảm tiêu thụ điện từ 12 kWh/m3 xuống chỉ còn 2,5 kWh/m3, vẫn còn lo ngại về sinh thái khi thải nước muối cô đặc. Nước muối nồng độ cao xả trực tiếp vào đầm phá ven biển có thể chìm xuống và làm ngạt hệ sinh thái đáy biển do mật độ cao và hàm lượng oxy hòa tan thấp.",
      questions: [
        {
          id: "il_8_q1",
          questionText: "How much electrical energy does modern SWRO consume per cubic meter of water produced?",
          options: [
            { label: "A", text: "Twelve kilowatt-hours" },
            { label: "B", text: "Seven point five kilowatt-hours" },
            { label: "C", text: "Two point five kilowatt-hours" },
            { label: "D", text: "Less than one kilowatt-hour" }
          ],
          correctAnswer: "C",
          explanation: "Giáo sư nói: 'reduced SWRO electrical energy consumption... down to just two point five kilowatt-hours.'"
        },
        {
          id: "il_8_q2",
          questionText: "Why can hyper-saline brine discharge harm coastal benthic ecosystems?",
          options: [
            { label: "A", text: "Because it floats on the surface and blocks sunlight from reaching seaweed." },
            { label: "B", text: "Because its high density and low dissolved oxygen cause it to sink and suffocate seabed life." },
            { label: "C", text: "Because it causes ocean water to instantly freeze around coral reefs." },
            { label: "D", text: "Because it contains high concentrations of radioactive isotopes." }
          ],
          correctAnswer: "B",
          explanation: "Bài nghe giải thích: 'can sink and suffocate benthic marine ecosystems due to its high density and low dissolved oxygen content.'"
        }
      ]
    },
    {
      id: "ielts_list_9",
      title: "Academic Writing Tutorial: Structuring a Literature Review",
      speaker: "Dr. Clara Davies",
      audioScript: "When writing the literature review chapter for your doctoral dissertation, avoid formatting the section as a mere chronological book report of past summaries. High-scoring reviews synthesize sources thematically, organizing literature around key methodological controversies or theoretical debates. For each major theme, you must clearly identify the 'empirical research gap'—the specific unanswered question in the existing academic record that your doctoral study is designed to address.",
      translation: "Khi viết chương tổng quan tài liệu cho luận án tiến sĩ, hãy tránh trình bày phần này theo kiểu liệt kê tóm tắt theo thời gian. Các bài tổng quan điểm cao tổng hợp tài liệu theo chủ đề, sắp xếp xung quanh các tranh luận về phương pháp hoặc lý thuyết. Với mỗi chủ đề chính, bạn phải xác định rõ 'khoảng trống nghiên cứu thực nghiệm'—câu hỏi chưa có lời giải đáp trong học thuật hiện tại mà nghiên cứu của bạn sẽ giải quyết.",
      questions: [
        {
          id: "il_9_q1",
          questionText: "How should a high-scoring literature review organize academic sources?",
          options: [
            { label: "A", text: "Strictly in alphabetical order by author last name" },
            { label: "B", text: "As a chronological summary of every book read" },
            { label: "C", text: "Thematically around key methodological controversies or theoretical debates" },
            { label: "D", text: "By grouping sources according to the country of publication" }
          ],
          correctAnswer: "C",
          explanation: "Tiến sĩ Davies hướng dẫn: 'High-scoring reviews synthesize sources thematically, organizing literature around key methodological controversies or theoretical debates.'"
        },
        {
          id: "il_9_q2",
          questionText: "What must researchers clearly identify within each major theme of a literature review?",
          options: [
            { label: "A", text: "The biography of the original researcher" },
            { label: "B", text: "The empirical research gap in existing academic literature" },
            { label: "C", text: "A glossary of latin scientific terminology" },
            { label: "D", text: "The total research budget spent by previous authors" }
          ],
          correctAnswer: "B",
          explanation: "Bài nghe nói: 'you must clearly identify the empirical research gap—the specific unanswered question in the existing academic record...'"
        }
      ]
    },
    {
      id: "ielts_list_10",
      title: "Global Economics Seminar: Renewable Energy Transition Costs",
      speaker: "Prof. Robert Sterling",
      audioScript: "Welcome to our macroeconomics seminar. While the levelized cost of electricity from photovoltaic solar and onshore wind has dropped by almost eighty percent since 2010, the financial bottleneck of the clean energy transition has shifted toward grid modernization. Transitioning from fossil fuels requires investing billions into high-voltage direct-current transmission corridors capable of transporting electricity from remote solar deserts to coastal industrial centers. Without upgrading these interstate grid interconnections, renewable generation will face frequent curtailment during peak production hours.",
      translation: "Chào mừng đến với hội thảo kinh tế vĩ mô. Mặc dù chi phí phát điện từ điện mặt trời và điện gió trên bờ đã giảm gần 80% từ năm 2010, điểm nghẽn tài chính của quá trình chuyển dịch năng lượng sạch đã chuyển sang hiện đại hóa lưới điện. Việc chuyển đổi từ nhiên liệu hóa thạch đòi hỏi đầu tư hàng tỷ đô la vào các đường dây tải điện một chiều điện áp cao để đưa điện từ vùng sa mạc xa xôi về các trung tâm công nghiệp ven biển. Nếu không nâng cấp liên kết lưới điện, sản lượng năng lượng tái tạo sẽ thường xuyên bị cắt giảm trong các giờ cao điểm sản xuất.",
      questions: [
        {
          id: "il_10_q1",
          questionText: "By approximately how much has the cost of photovoltaic solar and onshore wind dropped since 2010?",
          options: [
            { label: "A", text: "By 35 percent" },
            { label: "B", text: "By 50 percent" },
            { label: "C", text: "By almost 80 percent" },
            { label: "D", text: "By 95 percent" }
          ],
          correctAnswer: "C",
          explanation: "Giáo sư Sterling nói: 'has dropped by almost eighty percent since 2010...'"
        },
        {
          id: "il_10_q2",
          questionText: "What is currently the main financial bottleneck in the clean energy transition?",
          options: [
            { label: "A", text: "The high manufacturing cost of solar panels" },
            { label: "B", text: "Grid modernization and high-voltage transmission corridors" },
            { label: "C", text: "A scarcity of skilled electricians in cities" },
            { label: "D", text: "Government taxation on wind turbines" }
          ],
          correctAnswer: "B",
          explanation: "Bài nghe nêu: 'the financial bottleneck of the clean energy transition has shifted toward grid modernization... high-voltage direct-current transmission corridors.'"
        }
      ]
    }
  ],
  vocabulary: [
    {
      id: "ielts_v_1",
      word: "ubiquitous",
      pos: "adjective",
      pronunciation: "/juːˈbɪk.wɪ.təs/",
      meaning: "có mặt ở khắp mọi nơi, phổ biến rộng rãi",
      level: "C1",
      topic: "Technology / Society",
      example: "Smartphones have become ubiquitous in modern society, transforming interpersonal communication.",
      collocations: "ubiquitous presence, ubiquitous feature, become ubiquitous"
    },
    {
      id: "ielts_v_2",
      word: "exacerbate",
      pos: "verb",
      pronunciation: "/ɪɡˈzæs.ə.beɪt/",
      meaning: "làm trầm trọng thêm, làm xấu đi",
      level: "C1",
      topic: "Environment / Social Issues",
      example: "Rapid deforestation will exacerbate global climate change and threaten biodiversity.",
      collocations: "exacerbate a problem, exacerbate tensions, exacerbate symptoms"
    },
    {
      id: "ielts_v_3",
      word: "meticulous",
      pos: "adjective",
      pronunciation: "/məˈtɪk.jə.ləs/",
      meaning: "tỉ mỉ, cẩn trọng trong từng chi tiết",
      level: "C2",
      topic: "Academic Research / Work",
      example: "The research team conducted meticulous laboratory tests to verify the vaccine's efficacy.",
      collocations: "meticulous attention, meticulous preparation, meticulous analysis"
    },
    {
      id: "ielts_v_4",
      word: "pragmatic",
      pos: "adjective",
      pronunciation: "/præɡˈmæt.ɪk/",
      meaning: "thực tế, thực dụng (giải quyết theo tình huống thực tế)",
      level: "C1",
      topic: "Business / Governance",
      example: "The committee adopted a pragmatic approach to resolving the fiscal budget deficit.",
      collocations: "pragmatic approach, pragmatic solution, pragmatic view"
    },
    {
      id: "ielts_v_5",
      word: "alleviate",
      pos: "verb",
      pronunciation: "/əˈliː.vi.eɪt/",
      meaning: "làm giảm bớt, xoa dịu (nỗi đau, vấn đề khó khăn)",
      level: "C1",
      topic: "Health / Urban Planning",
      example: "Constructing high-speed railways can significantly alleviate traffic congestion in major cities.",
      collocations: "alleviate poverty, alleviate pressure, alleviate pain"
    },
    {
      id: "ielts_v_6",
      word: "paradigm",
      pos: "noun",
      pronunciation: "/ˈpær.ə.daɪm/",
      meaning: "mô hình, khuôn mẫu lý thuyết chuẩn",
      level: "C1",
      topic: "Science / Academia",
      example: "The discovery of quantum mechanics triggered a major paradigm shift in theoretical physics.",
      collocations: "paradigm shift, dominant paradigm, theoretical paradigm"
    },
    {
      id: "ielts_v_7",
      word: "resilience",
      pos: "noun",
      pronunciation: "/rɪˈzɪl.jəns/",
      meaning: "khả năng phục hồi, sức kiên cường bền bỉ",
      level: "C1",
      topic: "Psychology / Environment",
      example: "Coral reef ecosystems exhibit remarkable resilience when marine sanctuaries are protected.",
      collocations: "build resilience, psychological resilience, economic resilience"
    },
    {
      id: "ielts_v_8",
      word: "proliferate",
      pos: "verb",
      pronunciation: "/prəˈlɪf.ə.reɪt/",
      meaning: "tăng sinh nhanh chóng, nảy nở bùng nổ",
      level: "C1",
      topic: "Business / Technology",
      example: "Renewable energy startups continue to proliferate across international urban markets.",
      collocations: "proliferate rapidly, continue to proliferate, begin to proliferate"
    },
    {
      id: "ielts_v_9",
      word: "detrimental",
      pos: "adjective",
      pronunciation: "/ˌdet.rɪˈmen.təl/",
      meaning: "có hại, gây bất lợi nghiêm trọng",
      level: "C1",
      topic: "Health / Environment",
      example: "Prolonged exposure to fine particulate pollution has detrimental effects on respiratory health.",
      collocations: "detrimental effect, detrimental impact, prove detrimental"
    },
    {
      id: "ielts_v_10",
      word: "indispensable",
      pos: "adjective",
      pronunciation: "/ˌɪn.dɪˈspen.sə.bəl/",
      meaning: "không thể thiếu được, thiết yếu tuyệt đối",
      level: "C1",
      topic: "Work / Technology",
      example: "Artificial intelligence has become an indispensable analytical tool in genome sequencing.",
      collocations: "indispensable role, indispensable tool, prove indispensable"
    },
    {
      id: "ielts_v_11",
      word: "ambiguous",
      pos: "adjective",
      pronunciation: "/æmˈbɪɡ.ju.əs/",
      meaning: "mơ hồ, đa nghĩa, không rõ ràng",
      level: "C1",
      topic: "Law / Communication",
      example: "The treaty regulations remain ambiguous regarding extraterrestrial mineral rights.",
      collocations: "ambiguous wording, deliberately ambiguous, remain ambiguous"
    },
    {
      id: "ielts_v_12",
      word: "synthesize",
      pos: "verb",
      pronunciation: "/ˈsɪn.thə.saɪz/",
      meaning: "tổng hợp, kết hợp thành một thể thống nhất",
      level: "C1",
      topic: "Academic Writing / Science",
      example: "A successful doctoral thesis must synthesize diverse experimental findings into a cohesive theory.",
      collocations: "synthesize information, synthesize data, synthesize findings"
    },
    {
      id: "ielts_v_13",
      word: "empirical",
      pos: "adjective",
      pronunciation: "/ɪmˈpɪr.ɪ.kəl/",
      meaning: "dựa trên thực nghiệm, số liệu chứng minh thực tế",
      level: "C1",
      topic: "Science / Research",
      example: "There is robust empirical evidence linking green spaces to improved urban mental health.",
      collocations: "empirical evidence, empirical data, empirical research"
    },
    {
      id: "ielts_v_14",
      word: "unprecedented",
      pos: "adjective",
      pronunciation: "/ʌnˈpres.ɪ.den.tɪd/",
      meaning: "chưa từng có tiền lệ, vô tiền khoáng hậu",
      level: "C1",
      topic: "History / Global Events",
      example: "The global shift toward telework occurred at an unprecedented speed during the decade.",
      collocations: "unprecedented scale, unprecedented growth, unprecedented level"
    },
    {
      id: "ielts_v_15",
      word: "intricate",
      pos: "adjective",
      pronunciation: "/ˈɪn.trɪ.kət/",
      meaning: "phức tạp, tinh xảo, đan xen tỉ mỉ",
      level: "C1",
      topic: "Art / Systems",
      example: "Ancient Khmer engineers designed an intricate network of irrigation canals around Angkor.",
      collocations: "intricate details, intricate network, intricate design"
    }
  ]
};
