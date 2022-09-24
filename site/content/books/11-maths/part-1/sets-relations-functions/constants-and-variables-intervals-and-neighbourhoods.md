---
title: 'Constants and variables, intervals and neighbourhoods'
date: 2018-11-14T19:02:50-07:00
draft: false
weight: 4
extensions:
    - katex
---


இப்பகுதியினை மேலும் தொடர, அடிப்படைத்தேவைகளாக மாறிலிகள், மாறிகள், சாரா மாறிகள், சார்ந்த மாறிகள், இடைவெளிகள் மற்றும் அண்மைப் பகுதிகள் பற்றிய வரையறைகள்
அவசியமாகிறது.


### மாறிலிகள் மற்றும் மாறிகள் (Constants and variables)

ஒரு குறிப்பிட்ட கணிதச் செயல்முறை முழுவதும் மாறாமல் இருக்கும் அளவை அல்லது கணியம், ஒரு மாறிலி (constant) என்று அழைக்கப்படுகிறது. ஒரு கணிதச் செயல்முறையின்போது
மாறுபடும் ஒரு அளவை, மாறி (variable) என்று அழைக்கப்படுகிறது.

ஏதேனும் ஒரு மாறியின் மதிப்பு பிற மாறிகளின் மதிப்புகளைச் சார்ந்து இல்லாத போது அதனை ஒரு சாரா மாறி (independent variable) எனக் கூறுகிறோம். அதேசமயம் அதன் மதிப்பு, 
பிற மாறிகள்மதிப்புகளைச் சார்ந்து இருப்பின், அது சார்ந்த மாறி (dependent variable) என அழைக்கப்படுகிறது.

ஒரு முக்கோணத்தின் பரப்பு \\(A= \frac{1}{2}bh \\) என நமக்குத் தெரியும். இங்கு  \\( \frac{1}{2} \\) என்பது ஒரு மாறிலி மற்றும் \\(A, b, h\\) ஆகியவை மாறிகளாகும். குறிப்பாக \\(b, h\\) 
ஆகியவை சாரா மாறிகளாகவும், A ஒரு சார்ந்த மாறியாகவும் அமைந்துள்ளது. சாரா மற்றும் சார்ந்த மாறிகள் அவை அமைந்துள்ள இடத்தைப் பொறுத்து அமைகிறது என்பதனைக் கவனத்தில்
 கொள்ளவும். உதாரணமாக, \\(x + y = 1\\) என்ற த�ொடர்பில், \\(x\\) மற்றும் \\(y\\) மாறிகளாகவும் \\(1\\) ஒரு மாறிலியாகவும் உள்ளது.\\(x, y\\)  ஆகியவற்றில் எது சாரா மாறி \\(?\\) எது 
 சார்ந்த மாறி \\(?\\) இங்கு \\(x\\) சாரா மாறியாக எடுத்துக் கொண்டால் \\(y\\) சார்ந்த மாறியாகவும், \\(y\\) சாரா மாறியாக எடுத்துக் கொண்டால் x சார்ந்த  மாறியாகவும் அமையும். மேலும்
  கீழ்க்காணும் உதாரணங்களை எடுத்துக் கொள்வோம்.

(i) செவ்வகத்தின் பரப்பளவு ; \\(A = lb\\)

(ii) வட்டத்தின் பரப்பளவு ;   \\(A=\pi r^2\\)

(iii) கனச் செவ்வகத்தின் கன அளவு; \\(V=lbh\\) மேற்கண்ட உதாரணங்களில், \\(b, h, l, r\\) முதலியன சாரா மாறிகள்,\\(A\\) மற்றும் \\(V\\) சார்ந்த மாறிகள்  எனவும்,
 \\(\pi \\)ஒரு மாறிலி எனவும்  புரிந்து கொள்ள இயலும்.

மேற்கண்ட உதாரணங்களில் \\(b, h, l, r\\) முதலியன சாரா மாறிகள், \\(A\\) மற்றும் \\(V\\) சார்ந்த மாறிகள் எனவும், \\(r\\) ஒரு மாறிலி எனவும் புரிந்து கொள்ள இயலும்.

### இடைவெளிகள் மற்றும் அண்மைப்பகுதிகள் (Intervals and Neighbourhoods)

மெய்யெண்களின் கணம் \\( \R\\)-ஐ படம் 1.2–ல் உள்ளபடி ஒரு கோட்டில் உள்ள புள்ளிகளாகவும், கோட்டிலுள்ள ஒவ்வொரு புள்ளியையும் தனித்த ஒரு மெய்யெண்ணாகவும் கருத இயலும்.எனவே
ஒவ்வொரு மெய்யெண்ணும், கோட்டில் உள்ள ஒவ்வொரு புள்ளியுடன் தொடர்புபடுத்தப்படுகிறது. இதனால் இக்கோட்டினை மெய்யெண் கோடு (real line) என்கிறோம்.

 ![fraction Image graph](/books/11-maths/part-1/sets\constants-and-variables-intervals-and-neighbourhoods/constants-img1.png "MarineGEO logo")

வலப்பக்கம் மதிப்பு உயர்ந்தும் இடப்பக்கம் மதிப்பு குறைந்தும் அமைவதைக் காணலாம். \\(x\\) ஆனது \\(y\\) -ன் இடப்பக்கமாக அமைந்தால், \\(x < y\\) எனப் பெறும். மேலும், இக்கோட்டில்
தொடர்ச்சியற்றத் தன்மை இல்லாததால், எந்த இரண்டு மெய்யெண்களுக்கு இடையேயும் எண்ணிலடங்கா மெய்யெண்கள் அமையும்.

{{< box title="வரையறை 1.1" type="objective" >}}

\\( \R\\) -ன் ஒரு உட்கணமான \\(I\\) ஆனது ஒரு இடைவெளியாக (interval) இருக்கவேண்டுமெனில்

(i) \\(I\\) -ல் குறைந்தது இரு உறுப்புகள் இருக்க வேண்டும். மேலும்

(ii) \\(a,b \in I\\) மற்றும் \\( a<c<b \\) எனில், \\(c \in I \\) என இருத்தல் வேண்டும்.

{{< /box >}}
 

 வடிவியல் ரீதியாக, இடைவெளிகள் மெய்யெண்கோட்டிலுள்ள கதிர்களையும் கோட்டுத் துண்டுகளையும் குறிக்கிறது.

இயல் எண்களின் கணம், குறையற்ற முழு எண்களின் கணம், ஒற்றைப்படை எண்களின் கணம், இரட்டைப்படை எண்களின் கணம் போன்றவை இடைவெளிகளாகாது. ஏனெனில் எந்த
இரு மெய்யெண்களுக்கிடையே எண்ணற்ற மெய்யெண்கள் இருப்பதனால் மேற்கண்ட உதாரணங்கள் இடைவெளிகள் ஆகாது.

கீழ்க்காணும் உதாரணங்களைக் கவனிக்கவும்.

(i) பூஜ்ஜியத்தை விடப் பெரிதான மெய்யெண்களின் கணம்.

(ii) \\(5\\) -க்கு மேற்பட்டும், \\(7\\) –ஐ விடக் குறைவாகவும் உள்ள மெய்யெண்களின் கணம்

(iii) \\(1 \le x \le 3\\) எனும் நிபந்தனைக்குட்பட்ட \\(x\\) -மெய்யெண்களின் கணம்.

(iv) \\(1<x \le 2\\) எனும் வரம்பிற்குட்பட்ட \\(x\\) -மெய்யெண்களின் கணம்.

மேற்கண்ட நான்கு கணங்களும் இடைவெளிகளைக் குறிக்கின்றன. குறிப்பாக உதாரணம், (i) ஒரு முடிவுறா அல்லது முடிவிலா இடைவெளி ஆகும். (ii), (iii) மற்றும் (iv) ஆகியவை முடிவுறு
அல்லது முடிவுள்ள இடைவெளிகளாகும். “முடிவுள்ள இடைவெளி” என்றால் அவ்விடைவெளியில் எண்ணிலடங்கிய மெய்யெண்கள் மட்டும் இருக்கும் என்கிற பொருளன்று. இரு முனைகளும்
முடிவுள்ள எண்ணாக இருப்பதனை மட்டுமே குறிக்கிறது. எனவே, முடிவுள்ள மற்றும் முடிவிலா இடைவெளிகள் இரண்டும், முடிவற்ற கணங்களையே குறிப்பிடுகிறது. கோட்டுத்துண்டைக் குறிக்கும்
இடைவெளிகள் முடிவுள்ள இடைவெளி எனவும், கதிர்களைக் குறிக்கும் இடைவெளிகளும் மெய்யெண் கோடும் முடிவிலா இடைவெளிகளாகும்.

ஒரு முடிவுள்ள இடைவெளியை, மூடிய இடைவெளி (closed interval) என்று கூற வேண்டுமாயின் இரு முனைப் புள்ளிகளும் இடைவெளியில் அமைய வேண்டும். திறந்த இடைவெளி (open interval)
என்று கூற வேண்டுமாயின், இரு முனைப் புள்ளிகளும் இடைவெளியில் அமைதல் கூடாது. மூடிய இடைவெளிக்கு \\(‘[ ]’\\) சதுர அடைப்புக்குறியினையும், திறந்த இடைவெளிக்கு சாதாரண 
\\(‘( )’\\) அடைப்புக் குறியினையும் பயன்படுத்துவதைக் கவனத்தில் கொள்ளவும். முதல் இரு உதாரணங்கள் (i) மற்றும் (ii) ஆகியவை திறந்த இடைவெளிகளாகும். மூன்றாவது உதாரணம்
 மூடிய இடைவெளியாகும். நான்காவது உதாரணம் மூடிய இடைவெளியுமல்ல, திறந்த இடைவெளியுமல்ல. மேற்கண்ட நான்கு உதாரணங்களைக், குறியீடுகளாக \\( (0,\infty),(5,7),[1,3],[1,2]\\)
  என எழுதலாம்.

குறிப்பாக, \\([1, 3]\\) என்ற மூடிய இடைவெளியில் \\(1\\) மற்றும் \\(3\\) , மேலும் அதனிடையே உள்ள அனைத்து மெய்யெண்களும் உள்ளன. \\((1, 3)\\) என்ற திறந்த இடைவெளியில் \\(1\\)
 மற்றும் \\(3\\) ஆகிய மெய்யெண்கள் இல்லை. ஆனால், அதற்கிடையேயான அனைத்து மெய்யெண்களும் உள்ளன. \\((1, 2]\\) என்ற இடைவெளி மூடியதும் அல்ல; திறந்ததும் அல்ல. குறிப்பாக,
  \\(1\\) என்ற மெய்யெண் இடைவெளியில் இல்லை. ஆனால் \\(2\\) என்ற மெய்யெண் உள்ளது. மேலும் அவற்றிற்கு இடையேயான அனைத்து மெய்யெண்களும் உள்ளன.

முடிவிலி குறியீடான \\( \infty\\) என்பது ஒரு எண் அன்று. குறியீடுகளான \\(– \infty\\) மற்றும் \\(\infty\\) என்பன மெய்யெண் கோட்டின் முனைகளைக் குறிக்கப் பயன்படுகின்றன. மேலும் \\((a,b),[a,b]\\)
 ஆகிய இடைவெளிகள் எப்போதும் \\( \R \\)–ன் உட்கணங்களாகும்.

### இடைவெளிகளின் வகைகள் (Types of intervals)

இடைவெளிகளில் பல வகை உள்ளன. \\(a < b\\) ஆக இருக்குமாறு \\(a,b \in \R\\) என எடுத்துக் கொள்வோம். கீழ்க்காணும் அட்டவணை வெவ்வேறு வகை இடைவெளிகளை உணர்த்துகிறது. ஒரு
புள்ளியை நீக்கி விட்டு ஒரு கோட்டினை வரைய இயலாது. திறந்த வட்டமான \\(“o”\\)குறியீடு, அப்புள்ளி நீக்கப்பட்டுள்ளதாகவும், நிரம்பிய வட்ட குறியீடான \\('\bullet'\\) ஆனது அப்புள்ளி உள்ளடங்கியது எனவும் பொருள்படும்.

![table](/books/11-maths/part-1/sets\constants-and-variables-intervals-and-neighbourhoods/constants-img2.png "MarineGEO logo")

குறியீட்டு வடிவில் எழுதவும்.

(i) \\( \lbrace x:x \in \R,-2, \le x \le 0 \rbrace\\) 

 (ii) \\( \lbrace x:x \in \R,0, \le x \le 8 \rbrace\\)

(iii) \\( \lbrace x:x \in \R,-8, \le x \le -2 \rbrace\\)  

 (iv) \\( \lbrace x:x \in \R,-5, \le x \le 9 \rbrace\\)

### அண்மைப் பகுதி (Neighbourhood)

\\('a'\\)எனும் புள்ளியினை உள்ளடக்கிய எந்தவொரு திறந்த இடைவெளியும் \\(a\\) எனும் புள்ளியின்
அண்மைப்பகுதியாகும். \\(‘ \epsilon ’\\) என்பது ஒரு மிகை எண், குறிப்பாக மிகச்சிறியது எனில் \\(a\\) யின் \\(\epsilon\\) -அண்மைப் பகுதி என்பது \\((a- \epsilon,a+ \epsilon)\\)என்ற 
இடைவெளியாகும்.\\(a-\epsilon,a+ \epsilon\\) என்பது \\(a\\) -ஐ நீக்கிய அண்மைப்பகுதி எனவும் அதனை \\(0< |x-a| < \epsilon =\lbrace a \rbrace\\)எனவும் குறிப்பிடப்படுகிறது. [படம் 1.3]

![table](/books/11-maths/part-1/sets\constants-and-variables-intervals-and-neighbourhoods/constants-img3.png "MarineGEO logo")