---
title: 'காரணீயப் பெருக்கம்'
date: 2018-11-14T19:02:50-07:00
draft: false
weight: 3
extensions:
    - katex
---


- katex




{{< box title="" type="objective" >}}

முதல் n இயல் எண்களின் தொடர்ச்சியான பெருக்கல் n-ன் காரணியப் பெருக்கம் எனப்படும்.
இதனை n! எனக் குறிப்பிடுகிறோம்.அதாவது, n! = 1×2×3×...×n

{{< /box >}}

இந்த குறியீட்டை “ n factorial ” அல்லது “ factorial of n” என படிக்க வேண்டும்.

இந்த n! என்ற குறியீடு 1808 இல் பிரஞ்சு கணிதவியல் அறிஞர். கிருஸ்டியன் கிராம்ப் (Christian
Kramp) என்பவரால் அறிமுகப்படுத்தப்பட்டது. n என்ற ஒரு மிகை முழு எண்ணுக்கு,

\\(n!=n×(n-1)×(n-2)×...×3×2×1\\)

\\(=n(n-1)!,n>1-க்கு\\)

\\(=n(n-1)(n-2)!,n>2-க்கு\\)

\\(=n(n-1)(n-2)(n-3)!,n>3-க்கு. இவ்வாறாக தொடரலாம்.

மேலும், 1! = 1

2!=2×1×=2

3! = 3×2×1=6

4! = 4×3×2×1=24

5! = 5×4×3×2×1  = 120

... = ...

22! = 22 ×21× 20× = 1124000727777607680000


காரணியப்பெருக்கத்தில் 22 (ஸ்ரீனிவாச இராமானுஜத்தின் பிறந்தநாள்) என்ற எண்ணுக்கு
தனிச் சிறப்பு உண்டு. இது 1 ஐ விட பெரிய எண்களில் \\(\N \\) -ன் காரணியப் பெருக்கத்தில் \\(\N \\) இலக்கங்கள்
உள்ளன என்ற பண்பை பெற்ற மிகச்சிறிய எண்.

N! இல் சரியாக N இலக்கங்களைக் கொண்ட அடுத்த எண் N எது எனக் காண்பது, மாணவர்
மற்றும் ஆசிரியருக்கு ஒரு நல்ல பயிற்சியாகும். 0! = 1 என்பதை நிறுவ n = 0 என (n+1)!=(n+1) · n!
என்பதில் பிரதியிட 1!=(0+1)×0!⟹0!=\\(\frac{1!}{5}\\)=1 என நிருவலாம். இதுபோன்றே நாம் குறையற்ற
முழு எண்களுக்கான காரணியப் பெருக்கத்தை பற்றியும் விவாதிக்கலாம். காரணியப் பெருக்கத்தினை
சில குறை எண்களுக்கு மட்டும் அல்லாமல் கலப்பு எண்களுக்கு கூட வரையறுக்கலாம். இது இப்பாட
நூலின் பாடத்திட்டத்திற்கு அப்பாற்பட்டது.காரணியப் பெருக்கத்தினை காணும் முறையைத் தெளிவாக்க சில எடுத்துக்காட்டுகளைக் காண்போம்.


{{< box title="எடுத்துக்காட் 4.16" type="objective" >}}

மதிப்பைக் காண்க

(i) 5!     (ii) 6!-5!      (iii)\\(\frac{8!}{5!×2!}\\)

**தீர்வு**:

(i) 5! = 5×4×3×2×1 = 120.

(ii) 6! - 5! = 6×5!-5! =(6-1)×5!=5×120=600

(iii)\\(\frac{8!}{5!×2!}\\)=\\(\frac{8×7×6×5!}{5!×2!}\\)=\\(\frac{8×7×6}
{2}\\)=168

{{< /box >}}



{{< box title="எடுத்துக்காட் 4.17" type="objective" >}}
 
சுருக்குக:\\(\frac{7!}{2!}\\)  

**தீர்வு**:

\\(\frac{7!}{2!}\\)=\\(frac{7×6×5×4×3×2!}\\)=7×6×5×4×3=2520}

{{< /box >}}



{{< box title="எடுத்துக்காட் 4.18" type="objective" >}}

மதிப்பிடுக:\\(\frac{n!}{n!(n-r)}!\\) இங்கு (i) n = 7, r = 5 (ii) n = 50, r = 47
(iii) r = 3, எந்த n-க்கும்.

**தீர்வு**:

(i) n = 7, r = 5 எனில்

\\(\frac{n!}{n!(n-r)!}\\)=\\(\frac{7!}{5!(7-5)!}\\)=\\(\frac{7×6×5!}{5!×2!}\\)=\\(\frac{7×6}{1×2}=21\\)

(ii) n = 50, r = 47 எனில்

\\(\frac{n!}{n!(n-r)!}\\)=\\(\frac{50!}{47!(50-47)!}\\)=\\(\frac{50×49×48×47!}{47!×3!}\\)=\\(\frac{50×49×48}{1×2×3}\\)=19600.

(iii) r = 3, எந்த n-க்கும்

\\(\frac{n!}{n!(n-r)!}\\)=\\(\frac{n!}{3!(n-3)!}\\)=\\(\frac{n(n-1)(n-2)(n-3)!}{1×2×3×(n-3)!}\\)=\\(\frac{n(n-1)(n-2)}{6}\\)


{{< /box >}}


{{< box title="எடுத்துக்காட் 4.19" type="objective" >}}

N என்பது நாட்களின் எண்ணிக்கை என்க. N நாட்களின் உள்ள மொத்தமணி நேரங்களின் எண்ணிக்கை N! எனக் கொண்டால், N-ன் மதிப்புக் காண்க?

**தீர்வு**:

இதற்கு N!=24  ×  N என்ற சமன்பாட்டை தீர்க்க வேண்டும்.

N = 1,2,3,4 எனில்,  N!<24×N

N = 5 எனில்,  N!=5!=4!×5=24N.

N > 5 எனில்,  N!≥5!N>24×Nஎனவே, N = 5.

{{< /box >}}


{{< box title="எடுத்துக்காட் 4.20" type="objective" >}}

\\(\frac{6!}{n!}\\)=6 எனில், n-ன் மதிப்புக் காண்க?

**தீர்வு**:

\\(\frac{6!}{n!}\\)=\\(\frac{1.2.3.4.5.6.}{1.2.3...n}\\)=6.

n < 6 ஆக இருக்க வேண்டும் எனவே, n = 5.

{{< /box >}}


{{< box title="எடுத்துக்காட் 4.21" type="objective" >}}

n! + (n-1)! = 30 எனில், n-ன் மதிப்புக் காண்க?

**தீர்வு**:

30 = 6×5.

மேலும், n! + (n-1)! = (n + 1)(n-1)! சமப்படுத்த (n-1)!=6 =3! இதிலிருந்து, n = 4 என
அறியலாம்.

{{< /box >}}


{{< box title="எடுத்துக்காட் 4.22" type="objective" >}}

2! + 3! + 4! + ... + 22!-ன் ஒன்றாம் இலக்கம் என்ன?


**தீர்வு**:

5! இல் தொடங்கி எல்லா n!-க்கும் ஒன்றாம் இலக்கம் பூச்சியமாகும். எனவே ஒன்றாம்
இலக்கமானது 2! + 3! + 4! ஐ மட்டுமே பெறுத்து அமையும். இதன் மதிப்பு 2 + 6 + 24 = 32. எனவே,
இதன் ஒன்றாம் இலக்கம் 2.

{{< /box >}}


{{< box title="எடுத்துக்காட் 4.23" type="objective" >}}

\\(\frac{1}{7!}\\)+\\(\frac{1}{8!}\\)=\\(\frac{A}{9!}\\)எனில் A-ன் மதிப்பு என்ன?

**தீர்வு**:

இதனை

\\(\frac{A}{9×8×7!}\\)=\\(\frac{1}{7!}\\)+\\(\frac{1}{8×7!}\\)என எழுதலாம்.

எனவே,\\(\frac{1}{7!}\\)×\\(\frac{A}{9×8}\\)=\\(\frac{1}{7!}\\)×[1=\\(\frac{1}{8}\\)] இது \\(\frac{A}{72}\\)=\\(\frac{9}{8}\\)-க்கு சமமான மதிப்பை பெறும்,இதிலிருந்து, A = 81 ஆகும்.

{{< /box >}}


{{< box title="எடுத்துக்காட் 4.24" type="objective" >}}

\\(\frac{(2n)!}{n!}\\)=\\(2^n\\)(1.3.5...(2n-1) என நிறுவுக.

**தீர்வு**:

\\(\frac{(2n)!}{n!}\\)=\\(\frac{1.3.5...(2n-2)(2n-1)×2n}{n!}\\)

=\\(\frac{1.2.3.4(2n-1)(2.4.6(2n-2)×2n)}{n!}\\)

(இரட்டை மற்றும் ஒற்றை படை எண்களை தனித்தனியே சேர்க்க)

=\\(\frac{1.2.3.4(2n-1)×2^{n}×(1.2.3...(n-1).n)}{n!}\\)

(எல்லாவற்றிலிருந்தும் 2 ஐ வெளியே எடுக்க)

=\\(\frac{(1.3.5..(2n-1)) ×2^{n}×n!}{n!}\\)

=\\(2^{n}\\)\\(1.3.5...(2n-1)\\).

{{< /box >}}


## பயிற்சி 4.1

1. (i) ஒருவர் இரவு விருந்திற்காக ஒரு உணவு விடுதிக்கு சென்றார். அங்கிருந்த உணவு
பட்டியலில் 10 இந்திய மற்றும் 7 சீன உணவு வகைகள் இருந்தன. ஒரு இந்திய அல்லது
ஒரு சீன உணவை அவர் எத்தனை வகைகளில் தேர்ந்தெடுக்க முடியும்?

(ii) ஓர் கடையில் 3 விதமான மகிழுந்து பொம்மைகளும், 2 விதமான தொடர் வண்டி
பொம்மைகளும் உள்ளன. ஒரு குழந்தை ஒரு மகிழுந்து பொம்மையையும் மற்றும் ஒரு
தொடர் வண்டி பொம்மையையும் எத்தனை வழிகளில் தேர்ந்தெடுக்கலாம்?

(iii) 1, 2, 3, 4, 5 என்ற இலக்கங்களை திரும்ப வராத முறையில் பயன்படுத்தி எத்தனை
இரண்டு – இலக்க எண்களை உருவாக்கலாம்?

(iv) 10 இருக்கைகள் உள்ள அரங்கில் மூன்று நபர்கள் நுழைகிறார்கள். எத்தனை வழிகளில்
அவர்கள் அந்த இருக்கைகளில் அமரலாம்?

(v) 5 நபர்களை ஒரு வரிசையில் எத்தனை வழிகளில் அமர வைக்கலாம்?

2. (i) ஒரு அலைபேசியில் 6 வெவ்வேறான இலக்கங்களைக்கொண்ட கடவுச் சொல் உள்ளது.
அந்த கடவுச்சொல்லை மீட்டெடுக்க அதிகபட்சம் எத்தனை முயற்சிகளை செய்ய வேண்டும்?

(ii) 4 வெவ்வேறு நிற கொடிகளில் 3 கொடிகளை ஒன்றின் கீழ் ஒன்றாக அமைத்து எத்தனை
வெவ்வேறு விதமான சமிக்கைகளை உருவாக்கலாம்?

3. நான்கு குழந்தைகள் ஒரு ஓட்டப்பந்தயத்தில் ஓடுகிறார்கள்.

(i) முதல் இரண்டு இடங்களை எத்தனை வழிகளில் நிரப்பலாம்?

(ii) அந்த பந்தயத்தை எத்தனை வழிகளில் முடிக்கலாம்?

4. 2, 4, 6, 8 என்ற இலக்கங்களைப் பயன்படுத்தி எத்தனை 3 – இலக்க எண்களை

(i) இலக்கங்கள் திரும்ப வருமாறு

(ii) இலக்கங்கள் திரும்ப வராதவாறு காணலாம்.

5. எத்தனை மூன்று – இலக்க எண்களை 3 ஆனது ஒன்றாம் இலக்க இடத்தில் வருமாறு

(i) இலக்கங்கள் திரும்ப வரும் நிலையில்

(ii) இலக்கங்கள் திரும்ப வராதவாறு காணலாம்.

6. 100 மற்றும் 500-க்கு இடையில் 0,1,2,3,4,5 என்ற இலக்கங்களை பயன்படுத்தி

(i) இலக்கங்கள் திரும்ப வரும் நிலையில் எத்தனை எண்களை உருவாக்கலாம்.

(ii) இலக்கங்கள் திரும்ப வராமல் எத்தனை எண்களை உருவாக்கலாம்.

7. எத்தனை 3 – இலக்க ஒற்றைப்படை எண்களை 0,1,2,3,4,5 என்ற இலக்கங்களை பயன்படுத்தி

(i) இலக்கங்கள் திரும்ப வராமல்

(ii) இலக்கங்கள் திரும்பவருமாறு காணலாம்.

8. கீழ்க்காணும் நிபந்தனைக்கு உட்பட்டு 999 மற்றும் 10000-க்கு இடையே உள்ள எண்களை
எண்ணுக.

(i) எந்த நிபந்தனையும் இல்லாமல்

(ii) எந்த இலக்கமும் திரும்ப வராமல்

(iii) குறைந்தபட்சம் ஏதேனும் ஒரு இலக்கம் திரும்ப வருமாறு.

9. 0, 1, 2, 3, 4, 5 என்ற இலக்கங்களை பயன்படுத்தி, 5 ஆல் வகுபடும், மூன்று-இலக்க எண்கள்
கீழ்க்காணும் நிபந்தனைக்குட்பட்டு எத்தனை உள்ளன.

(i) இலக்கங்கள் திரும்ப வராமல்?

(ii) இலக்கங்கள் திரும்ப வருமாறு?

10. A என்ற இடத்திலிருந்து B என்ற இடத்திற்கு செல்ல \\(B_1 ,B_2\\) என்ற இரண்டு பேருந்து வழித்
தடங்களும், \\(T_1,T_2\\) என்ற இரண்டு இரயில் வழித்தடங்களும் மேலும் \\(A_1\\) என்ற வான்
வழித்தடமும் உள்ளது. B என்ற இடத்திலிருந்து C என்ற இடத்திற்கு செல்ல \\(B_1\\)என்ற ஒரு
பேருந்து வழித்தடமும், \\(T_1,T_2\\) என்ற இரண்டு இரயில் வழித்தடங்களும் மேலும் \\)A_1\\)என்ற
வான் வழித்தடமும் உள்ளது. A என்ற இடத்திலிருந்து C என்ற இடத்திற்கு B என்ற இடம்
வழியே ஒரே வழித்தடத்தை மீண்டும் பயன்படுத்தாமல் எத்தனை வழிகளில் செல்லலாம்?

11. 1-க்கும் 1000-க்கும் இடையே உள்ள (இரண்டையும் உள்ளடக்கிய) எண்களில் 2 ஆலும் 5
ஆலும் வகுபடாத எண்களின் எண்ணிக்கையைக் காண்க.

12. LOTUS எனும் வார்த்தையிலுள்ள எழுத்துகளைப் பயன்படுத்தி

(i) L இல் ஆரம்பித்து அல்லது S இல் முடிக்கும் வகையில் எத்தனை எழுத்துச் சரங்கள்
உள்ளன.

(ii) L இல் துவங்கவோ, மற்றும் S இல் முடிக்கவோ கூடாத எழுத்துச் சரங்களின்
எண்ணிக்கையைக் காண்க.

13. (i) ஒவ்வொரு குறிக்கோள் வினாவிற்கும் 4 வாய்ப்புகள் உள்ளன, 6 வினாக்களுக்கு
எத்தனை வழிகளில் விடையளிக்கலாம்?

(ii) 3 புறாகூடுகளில் 10 புறாக்களை எத்தனை வழிகளில் தங்கவைக்கலாம்?

(iii) 10 மாணவர்களுக்கு 12 வெவ்வேறான பரிசுகளை எத்தனை வழிகளில்
பகிர்ந்தளிக்கலாம்?

14. மதிப்பினைக் காண்க

(i) 6! (ii)4! + 5! (iii)3!-2! (iv)3!×4! (v)\\(\frac{12!}{9!×3!}\\) (vi) \\(\frac{(n+3)!}{(n+1)!}\\)

15. மதிப்புக் காண்க \\(\frac{n!}{n!(n-r)!}\\) இங்கு

(i) n = 6 , r = 2 (ii) n = 10, r = 3 (iii) எந்த n-க்கும், r = 2

16. n-ன் மதிப்பை காண்க

(i) (n + 1)! = 20(n - 1)! (ii)\\(\frac{1}{8!}\\)+\\(\frac{1}{9!}\\)=\\(\frac{n}{10!}\\)




காரணியப் பெருக்கத்தைப் பொதுமைப்படுத்தி இரட்டைக் காரணியப் பெருக்கம் என
கீழ்காணுமாறு வரையறுக்கலாம்.


{{< box title="n-ன் இரட்டை காரணியப் பெருக்கம்: (Double Factorial of n)" type="objective" >}}

n-ன் காரணியப் பெருக்கத்தை n! என குறிக்கிறோம். இதனை f:\\(\N\\)∪{0} \\(\to\\) \\(\N\\)

இங்கு \\(\N\\) இயல் எண்களின் கணம். இதன் வரையறை,

f(n) =\\(\begin{cases} 1 &\text{} n=0   \\n×(n-1)×(n-2)×...×3×2×1,n &\text{} \neq\end{cases}\\)