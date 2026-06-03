// Handle Preloader
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
        setTimeout(() => preloader.style.display = 'none', 600);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const productSlider = document.getElementById('productSlider');
    const sliderContainer = document.querySelector('.products-slider-container');
    const productCards = document.querySelectorAll('.product-card');
    
    // Modal Elements
    const modal = document.getElementById('productModal');
    const modalBody = document.getElementById('modalBody');
    const closeModal = document.querySelector('.close-modal');

    let currentSlide = 0;
    const slideInterval = 5000; // 5 seconds per slide

    function nextSlide() {
        // Remove active class from current slide
        slides[currentSlide].classList.remove('active');
        
        // Move to next slide
        currentSlide = (currentSlide + 1) % slides.length;
        
        // Add active class to new slide
        slides[currentSlide].classList.add('active');
    }

    // Auto play slider
    setInterval(nextSlide, slideInterval);

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Offset for navbar height
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll Reveal Animation Logic
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Once animated, we can stop observing
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate').forEach(el => {
        observer.observe(el);
    });

    // Product Data Store
    const productData = {
        'i-Care': {
            title: 'i-Care',
            tagline: 'iCare പൂർണ്ണമായും ഒരു വെൽനസ് സപ്ലിമെന്റ് ആണ്, അത് ഏതെങ്കിലും രോഗനിർണയ ആവശ്യങ്ങൾക്കോ മെഡിക്കൽ ഉപയോഗത്തിനോ വേണ്ടിയുള്ളതല്ല.',
            weight: '1 litre',
            price: 'INR 100 handling charges applicable. (Total INR 3097.50 all inclusive)',
            description: 'കുർക്കുമിൻ, ബോസ്വെല്ലിയ, ശതാവരി, വലേറിയൻ എന്നിവയുടെ മിശ്രിതമായ ഇൻകുമിൻ കോംപ്ലക്സ് TM അടങ്ങുന്ന ആയുർവേദത്തിന്റെ അടിസ്ഥാനതത്വങ്ങളാൽ ഉരുത്തിരിഞ്ഞ സവിശേഷമായ പ്രകൃതിദത്ത രൂപീകരണമാണിത്, ഇത് സ്ത്രീകളുടെ മൊത്തത്തിലുള്ള ക്ഷേമത്തെ സമഗ്രമായി പിന്തുണയ്ക്കുന്നു. ഹോർമോണുകൾ സന്തുലിതമാക്കുന്നതിനും സമ്മർദ്ദം വർദ്ധിപ്പിക്കുന്നതിനും എല്ലുകളും പേശികളും ശക്തിപ്പെടുത്താനും ഇത് സഹായിക്കുന്നു, അതേസമയം സന്ധികളെ അപചയത്തിൽ നിന്ന് സംരക്ഷിക്കുകയും എല്ലുകളെ ആരോഗ്യകരവും ശക്തവുമാക്കുകയും ചെയ്യുന്നു.',
            benefits: ['Hormonal Wellness', 'Osteo Wellness', 'Psychological Wellness', 'Immune Wellness', 'Cosmetic Wellness', 'Gut Wellness'],
            usage: 'iCare പൂർണ്ണമായും ഒരു Women വെൽനസ് സപ്ലിമെന്റ് ആണ്, ICare തണുത്തതും വരണ്ടതുമായ സ്ഥലത്താണ് സൂക്ഷിക്കേണ്ടത്.'
        },
        'i-Glow': {
            title: 'i-Glow',
            tagline: 'ലോകത്തിലെ ഏറ്റവും വിലപിടിപ്പുള്ള സുഗന്ധവ്യഞ്ജനമായ കുങ്കുമപ്പൂവും ഔഷധസസ്യങ്ങളുമൊത്തുള്ള ചർമ്മസംരക്ഷണ സപ്ലിമെന്റുകളിൽ ആദ്യത്തേതാണ് iGlow.',
            weight: '28 × 35 g',
            price: 'INR 100 handling charges applicable. (Total INR 3097.50 all inclusive)',
            description: 'നിങ്ങളുടെ സൗന്ദര്യത്തെ ഉള്ളിൽ നിന്ന് ക്രമീകരിക്കാനും ചർമ്മത്തിന് പുറത്ത് തിളക്കം നൽകാനും രൂപകൽപ്പന ചെയ്ത പ്രകൃതിദത്ത സസ്യ കൊളോജൻ അടങ്ങിയ ചർമ്മ ആരോഗ്യ സപ്ലിമെന്റാണ് iGlow. പരമ്പരാഗത ആയുർവേദ തത്വങ്ങളെ അടിസ്ഥാനമാക്കിയുള്ള പ്രകൃതിദത്ത ഉൽപ്പന്നമാണ് iGlow. ഇത് ചർമ്മത്തിന്റെ കൊളാജനെ ശക്തിപ്പെടുത്തുകയും ചർമ്മത്തിന് പോഷണം നൽകുകയും സെല്ലുലാർ തലത്തിൽ അത് നന്നാക്കുകയും ചെയ്യുന്ന ശക്തമായ ആന്റി-ഏജിംഗ് ത്വക്ക് പിന്തുണയാണ്.',
            benefits: [
                'iGlow ഒരു പ്രകൃതിദത്ത ഉൽപ്പന്നമാണ്, അത് ഇത്തരത്തിലുള്ള ആദ്യത്തേതാണ്. ഇത് നിങ്ങളുടെ ശരീരത്തെ ഉള്ളിൽ നിന്ന് ക്രമീകരിക്കുകയും പുറത്ത് തിളങ്ങുകയും ചെയ്യുന്നു.',
                'ശക്തമായ ആന്റിഓക്സിഡന്റ് ഗുണങ്ങളുള്ള ചേരുവകൾ കൊണ്ടാണ് iGlow നിർമ്മിച്ചിരിക്കുന്നത്. ഈ ചേരുവകൾ iGlow ന് ചർമ്മത്തെ പുനരുജ്ജീവിപ്പിക്കാനും വ്യക്തവും ഏകീകൃതവുമായ നിറം സൃഷ്ടിക്കാനും യുവത്വമുള്ളതും മിനുസമാർന്നതും ആരോഗ്യമുള്ളതുമായ ചർമ്മത്തെ പ്രോത്സാഹിപ്പിക്കുന്നതിനുള്ള അതുല്യമായ കഴിവ് നൽകുന്നു.',
                'ഇത് ചർമ്മത്തിന്റെ ഈർപ്പം നിറയ്ക്കുകയും ചുളിവുകൾ, മന്ദത, വാർദ്ധക്യത്തിന്റെ മറ്റ് ലക്ഷണങ്ങൾ എന്നിവ കുറയ്ക്കുകയും ചെയ്യുന്നു.',
                'ഇത് ചർമ്മത്തെ വെളുപ്പിക്കുകയും ചുളിവുകളില്ലാത്തതാക്കുകയും കറുത്ത പാടുകളുടെ രൂപം കുറയ്ക്കുകയും ചെയ്യുന്നു.',
                'രക്തം ശുദ്ധീകരിക്കുന്നതിനും കരളിന്റെ വിഷാംശം ഇല്ലാതാക്കുന്നതിനും iGlow സഹായിക്കുന്നു.'
            ],
            usage: 'Breakfast കഴിച്ചു പതിനഞ്ച് മിനിറ്റ് ശേഷം പ്രതിദിനം 1-2 iGlow സാച്ചെറ്റ് കഴിക്കാൻ ശുപാർശ ചെയ്യുന്നു. നിങ്ങളുടെ ചർമ്മത്തെ സംരക്ഷിക്കാനുള്ള best product ആണ് iGlow.'
        },
        'i-Coffee': {
            title: 'i-Coffee',
            tagline: 'കാപ്പിയുടെ ആധികാരിക രുചി നഷ്ടപ്പെടാതെ തന്നെ ഐക്കോഫി ഉപയോഗിച്ച് നിങ്ങൾക്ക് പ്രമേഹം നിയന്ത്രിക്കാം.',
            weight: '50 sachets × 10 g = 500g (Black) | 50 sachets × 15 g = 750g (Creamer)',
            price: 'INR 100 handling charges applicable. (Total INR 3097.50 all inclusive)',
            description: 'ഞങ്ങൾ കർണാടകയിലെ കൂർഗിൽ നിന്നുള്ള ഉയർന്ന നിലവാരമുള്ള കാപ്പിക്കുരു ഉപയോഗിക്കുന്നു. കൂടാതെ, ഇത് പ്രധാന ഘടകമായ സലാസിയ റെറ്റിക്യുലേറ്റയുമായി പ്രൊഫഷണൽ മിശ്രിതമാണ്. രക്തത്തിലെ പഞ്ചസാരയുടെ അളവ് കുറയ്ക്കുന്നതിനും സന്തുലിതമാക്കുന്നതിനും തെളിയിക്കപ്പെട്ടിട്ടുള്ള ഒരു ആയുർവേദ സസ്യമാണ് സലാസിയ റെറ്റിക്യുലേറ്റ. അതിന്റെ സജീവ ഘടകമായ സാൽസിറ്റൽ, ഒരു ക്ലിനിക്കൽ തെളിയിക്കപ്പെട്ട ഹെർബൽ സപ്ലിമെന്റ്, സ്റ്റാൻഡേർഡ്, എക്സ്ട്രാക്റ്റ് ചെയ്ത് ഐക്കോഫിയിലേക്ക് ചേർക്കുന്നു.',
            benefits: [
                'ഊർജം വർദ്ധിപ്പിക്കുന്ന ഗുണങ്ങൾ ഉള്ളതിനാൽ കാപ്പി ലോകത്ത് ഏറ്റവുമധികം വിറ്റഴിക്കപ്പെടുന്ന ഒരു ചരക്കാണ്.',
                'ഇത് നിങ്ങളുടെ മാനസിക ഉണർവ് വർദ്ധിപ്പിക്കുകയും ശാരീരിക ക്ഷീണം കുറയ്ക്കുകയും ചെയ്യുന്നു.',
                'രക്തത്തിലെ പഞ്ചസാര നിയന്ത്രിക്കുന്ന ഊർജ്ജം വർദ്ധിപ്പിക്കുന്ന പാനീയം. ഭാരം നിയന്ത്രിക്കുന്നതിനും ഐക്കോഫ് സഹായിച്ചേക്കാം.',
                'ഹൈ ഡെൻസിറ്റി ലിപ്പോപ്രോട്ടീന്റെ (HDL) അളവ് വർദ്ധിപ്പിക്കുകയും ലോ ഡെൻസിറ്റി ലിപ്പോപ്രോട്ടീൻ (LDL) കുറയ്ക്കുകയും ചെയ്യുന്നു.',
                'ലിപിഡിന്റെ അളവ് മെച്ചപ്പെടുത്തുകയും ഹൃദയാരോഗ്യം മെച്ചപ്പെടുത്തുകയും ചെയ്യുന്നു.',
                'വയറിലെ പൊണ്ണത്തടി കുറയ്ക്കുകയും മെറ്റബോളിക് സിൻഡ്രോമിനെ അകറ്റി നിർത്താനും സഹായിക്കുന്നു.'
            ],
            usage: 'ദിവസത്തിൽ രണ്ട് തവണ Breakfast-നു അര മണിക്കൂർ മുമ്പ് പിന്നെ Dinner-നു അര മണിക്കൂർ മുമ്പ് icoffeeയുടെ ശുപാർശ ചെയ്യുന്ന ഒരു icoffee സാച്ചെറ്റ് വീതം 100 മില്ലി തിളപ്പിച്ച വെള്ളത്തിൽ കലക്കി പ്രമേഹരോഗികൾക്ക് നിർദ്ദേശിച്ച മരുന്നുകൾക്കൊപ്പം കഴിക്കുന്നതും സുരക്ഷിതമാണ്. ഐക്കോഫി രണ്ട് തരത്തിലാണ് വരുന്നത് - കോഫി ക്രീമറും, കറുപ്പും.'
        },
        'i-Slim': {
            title: 'i-Slim',
            tagline: 'ആസക്തികളെ ചെറുക്കാനും കൊഴുപ്പ് കത്തുന്നത് വർധിപ്പിക്കാനും സഹായിക്കുന്നതിലൂടെ ശരീരഭാരം നിയന്ത്രിക്കാൻ ഉദ്ദേശിച്ചുള്ള പ്രകൃതിദത്ത ബാർ ഫോർമുലേഷനാണ് ഇസ്ലിം ഫ്ലാറ്റ് ടമ്മികൾ.',
            weight: '75g × 28 units',
            price: 'INR 100 handling charges applicable. (Total INR 3097.50 all inclusive)',
            description: 'രോഗപ്രതിരോധ പ്രവർത്തനം മെച്ചപ്പെടുത്തുകയും ശരീരത്തിലെ മെറ്റബോളിസം വർധിപ്പിക്കുകയും വിശപ്പ് കുറയ്ക്കുകയും കൊഴുപ്പ് തടയുകയും ഹെപ്പറ്റോപ്രൊട്ടക്റ്റീവ് ആയി പ്രവർത്തിക്കുകയും ആരോഗ്യകരമായ ശരീരഭാരം കുറയ്ക്കുകയും ചെയ്യുന്നു, അതേസമയം നിങ്ങളുടെ വയറുകളെ ഫലപ്രദമായി ആഹ്ലാദിപ്പിക്കുകയും ചെയ്യുന്നു. വായിൽ വെള്ളമൂറുന്ന രുചിയോടൊപ്പം മികച്ച വെയ്റ്റ് മാനേജ്മെന്റ് ബാറുകളിൽ ഒന്നാണ് iSlim.',
            benefits: [
                'ഹെർബൽ എക്സ്ട്രാക്റ്റുകളും സസ്യ പ്രോട്ടീനുകളും പോഷകങ്ങളും അടങ്ങിയിട്ടുണ്ട്, ഇത് നിങ്ങളുടെ വയറിനെ ആഹ്ലാദിപ്പിക്കുകയും ഭാരം കുറയ്ക്കാൻ സഹായിക്കുകയും ചെയ്യുന്നു.',
                'ഭക്ഷണത്തിന്റെ ആസക്തി കുറയ്ക്കുകയും ശരീരത്തിലെ കൊഴുപ്പ് കത്തിക്കുന്നത് വർദ്ധിപ്പിക്കുകയും ചെയ്യുന്നു.',
                'വിശപ്പ് അടിച്ചമർത്തുന്നതിലൂടെ ശരീരഭാരം കുറയ്ക്കാൻ സഹായിക്കുന്നു. ഉപാപചയ പ്രക്രിയയെ വേഗത്തിലാക്കുന്നു.',
                'ശരീരത്തെ ഇന്ധനത്തിനായി കൊഴുപ്പ് സ്റ്റോറുകളെ ആശ്രയിക്കുന്നു, ശരീരത്തിലെ കൊഴുപ്പ് ഫലപ്രദമായി കുറയ്ക്കുന്നു.',
                'കരളിലെ കൊഴുപ്പ് കോശങ്ങളെ കുറയ്ക്കുകയും ഫാറ്റി ആസിഡുകളെ ഓക്സിഡൈസ് ചെയ്യുകയും ചെയ്യുന്നു.',
                'ആരോഗ്യകരമായ പേശികളെ പിന്തുണയ്ക്കുകയും ഹൃദയത്തിൽ ആരോഗ്യകരമായ ലിപിഡുകൾ നിലനിർത്തുകയും കുടലിലെ വിഷാംശം ഇല്ലാതാക്കുകയും ചെയ്യുന്നു.'
            ],
            usage: 'ഐ-സ്ലിം 6 മണിക്ക് ഓപ്ഷണൽ, ലഘു അത്താഴത്തിന് ശേഷം, 7pm മുതൽ 9pm വരെ കഴിക്കണം. ദിവസവും ഏകദേശം 3.5 ലിറ്റർ വെള്ളം കുടിക്കുന്നത് വളരെ ഉത്തമമാണ്. ഐ-സ്ലിം നിങ്ങളുടെ വിശപ്പ് നിയന്ത്രിക്കാനും കലോറി ഉപഭോഗം കുറയ്ക്കാനുമുള്ള സമ്മർദ്ദരഹിതമായ മാർഗമാണ്. അമിതവണ്ണത്തിൽ നിന്ന് മുക്തി നേടാനും ആരോഗ്യകരമായ ഭാരം നിലനിർത്താനുമുള്ള സൗകര്യപ്രദമായ മാർഗമാണ് ഐ-സ്ലിം.'
        },
        'i-Pulse': {
            title: 'i-Pulse',
            tagline: 'ഐപൾസ് ഒരു ആന്റി-ഓക്സിഡന്റ് സമ്പുഷ്ടമായ മൾട്ടി-ഫ്രൂട്ട് ബ്ലെൻഡ് ജ്യൂസാണ്, ഇത് ഹൃദയധമനികളുടെ പ്രവർത്തനത്തെ സഹായിക്കുകയും കാൻസർ വിരുദ്ധ പിന്തുണ നൽകുകയും ചെയ്യുന്നു.',
            weight: '1 litre',
            price: 'INR 100 handling charges applicable. (Total INR 3097.50 all inclusive)',
            description: 'ആന്റിഓക്സിഡന്റ് പഴങ്ങളുടെ സവിശേഷവും സമന്വയിപ്പിക്കുന്നതുമായ സംയോജനത്തിലൂടെ, ഫ്രീ റാഡിക്കലുകളുടെ നാശത്തിനെതിരെയുള്ള മികച്ച പ്രതിരോധമാണ് ഐപൾസ്, ആരോഗ്യകരമായ കൊളസ്ട്രോൾ നിയന്ത്രിക്കുന്നതിനും പ്രതിരോധശേഷി മെച്ചപ്പെടുത്തുന്നതിനും സഹായിക്കുന്നു. ഔഷധസസ്യങ്ങളുടെയും ആന്റിഓക്സിഡന്റ് പഴങ്ങളുടെ മിശ്രിതത്തിന്റെയും സവിശേഷമായ സംയോജനം, ഇത് പൊതുവായ ബലഹീനതയെയും സമ്മർദ്ദത്തെയും ഫലപ്രദമായി പ്രതിരോധിക്കുകയും ശ്വസന പ്രവർത്തനങ്ങളെ സഹായിക്കുകയും രക്തചംക്രമണം മെച്ചപ്പെടുത്തുകയും ലിപിഡിന്റെ അളവ് കുറയ്ക്കുകയും ചെയ്യും. ഐപൾസ് ശരീരത്തിന്റെ സ്വയം പുനരുജ്ജീവിപ്പിക്കാനുള്ള കഴിവ് വർദ്ധിപ്പിക്കുന്നു, ഹൃദയപേശികളെ ശക്തിപ്പെടുത്തുന്നു, ആരോഗ്യകരമായ താളം നിലനിർത്തുന്നു.',
            benefits: [
                'ഈ ശക്തമായ മിശ്രിതം ഹൃദയാരോഗ്യത്തിന് സംഭാവന ചെയ്യുന്നു.',
                'ഹോമിയോസ്റ്റാസിസിനെ പിന്തുണയ്ക്കുന്നതിലൂടെയും സെല്ലുലാർ മെറ്റബോളിസം മെച്ചപ്പെടുത്തുന്നതിലൂടെയും സെല്ലുലാർ ആരോഗ്യം നിലനിർത്തുന്നു.',
                'ന്യൂറോ ഡീജനറേറ്റീവ് പ്രശ്നങ്ങൾ തടയുകയും മെമ്മറി കേടുകൂടാതെ സൂക്ഷിക്കുകയും ചെയ്യുന്നു.',
                'അലർജികൾക്കെതിരായ പ്രതിരോധം വർദ്ധിപ്പിക്കുകയും ശ്വസന ആരോഗ്യം നിലനിർത്തുകയും കരളിന്റെ ആരോഗ്യം സംരക്ഷിക്കുകയും ചെയ്യുന്നു.',
                'ആരോഗ്യകരമായ രക്തചംക്രമണം പ്രോത്സാഹിപ്പിക്കുകയും മുറിവുകൾ വേഗത്തിൽ സുഖപ്പെടുത്തുകയും വീക്കം കുറയ്ക്കുകയും ചെയ്യുന്നു.',
                'വാസ്കുലർ, പേശീ അസ്ഥികളുടെ ആരോഗ്യം നിലനിർത്തുന്നു.'
            ],
            usage: 'iPulse തണുത്തതും വരണ്ടതുമായ സ്ഥലത്താണ് സൂക്ഷിക്കേണ്ടത്. ശുപാർശ ചെയ്യുന്ന അളവ് 30 മില്ലി ആണ്, ദിവസത്തിൽ രണ്ടുതവണ കഴിക്കണം. നിങ്ങളുടെ ഭക്ഷണത്തിന് അര മണിക്കൂർ മുമ്പ്. നിങ്ങൾക്ക് വേണമെങ്കിൽ തുല്യ അളവിൽ വെള്ളത്തിൽ കലർത്താം. ആരോഗ്യകരവും സമതുലിതമായതുമായ ജീവിതശൈലി നയിക്കാനുള്ള എളുപ്പമാർഗ്ഗമായി ഇത് വേറിട്ടുനിൽക്കുന്നു.'
        }
    };

    function openModal(productId) {
        const data = productData[productId];
        if (!data) return;

        modalBody.innerHTML = `
            <h2>${data.title}</h2>
            <p style="font-style: italic; color: var(--primary-color); margin-bottom: 20px;">${data.tagline}</p>
            <div class="price-tag">
                <strong>Net Weight:</strong> ${data.weight}<br>
                <strong>Note:</strong> ${data.price}
            </div>
            <h3>വിവരണം (Description)</h3>
            <p>${data.description}</p>
            <h3>ആനുകൂല്യങ്ങൾ (Benefits)</h3>
            <div class="benefits-list">
                ${data.benefits.map(b => `<div class="benefit-item"> ${b}</div>`).join('')}
            </div>
            <h3>ഉപയോഗം (Usage)</h3>
            <p>${data.usage}</p>
        `;
        
        modal.classList.add('show');
        document.body.style.overflow = 'hidden'; // Prevent page scroll
    }

    function closeProductModal() {
        if (modal) {
            modal.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    }

    if (productCards && modal) {
        productCards.forEach(card => {
            card.addEventListener('click', () => {
                const productId = card.getAttribute('data-product');
                if (productData[productId]) {
                    openModal(productId);
                }
            });
        });

        if (closeModal) {
            closeModal.addEventListener('click', closeProductModal);
        }

        window.addEventListener('click', (e) => {
            if (e.target === modal) closeProductModal();
        });
    }

    // Carousel Navigation Logic
    const scrollLeftBtn = document.getElementById('scrollLeftBtn');
    const scrollRightBtn = document.getElementById('scrollRightBtn');
    const scrollAmount = 290;

    function scrollToElCenter(el) {
        const containerRect = sliderContainer.getBoundingClientRect();
        const elRect = el.getBoundingClientRect();
        const targetLeft = sliderContainer.scrollLeft + (elRect.left - containerRect.left) - (containerRect.width / 2) + (el.offsetWidth / 2);
        sliderContainer.scrollTo({ left: targetLeft, behavior: 'smooth' });
    }

    if (scrollLeftBtn && scrollRightBtn && sliderContainer) {
        scrollLeftBtn.addEventListener('click', () => {
            const focused = document.querySelector('.product-card.focused');
            if (focused && focused.previousElementSibling) {
                scrollToElCenter(focused.previousElementSibling);
            } else {
                sliderContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            }
        });
        
        scrollRightBtn.addEventListener('click', () => {
            const focused = document.querySelector('.product-card.focused');
            if (focused && focused.nextElementSibling) {
                scrollToElCenter(focused.nextElementSibling);
            } else {
                sliderContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        });

        // Continuous Auto-scroll functionality
        let isAnimating = false;
        let isHovered = false;

        function continuousScroll() {
            if (!isAnimating && !isHovered) {
                sliderContainer.scrollLeft += 1;
                // If reached the end, snap back to start
                if (sliderContainer.scrollLeft + sliderContainer.clientWidth >= sliderContainer.scrollWidth - 1) {
                    sliderContainer.scrollLeft = 0;
                }
            }
            requestAnimationFrame(continuousScroll);
        }
        requestAnimationFrame(continuousScroll);

        // Pause auto-scroll on hover
        const carouselWrapper = document.querySelector('.products-carousel-wrapper');
        if (carouselWrapper) {
            carouselWrapper.addEventListener('mouseenter', () => isHovered = true);
            carouselWrapper.addEventListener('mouseleave', () => isHovered = false);
        }

        // Add pause to click listeners
        const originalLeftClick = scrollLeftBtn.onclick;
        scrollLeftBtn.addEventListener('click', () => {
            isAnimating = true;
            setTimeout(() => isAnimating = false, 600);
        });
        scrollRightBtn.addEventListener('click', () => {
            isAnimating = true;
            setTimeout(() => isAnimating = false, 600);
        });
    }

    // Continuous Focus Logic for Infinite Scroll
    function updateFocusedCard() {
        if (!sliderContainer || productCards.length === 0) return;
        
        const containerRect = sliderContainer.getBoundingClientRect();
        const containerCenter = containerRect.left + containerRect.width / 2;

        let closestCard = null;
        let minDistance = Infinity;

        productCards.forEach(card => {
            const cardRect = card.getBoundingClientRect();
            const cardCenter = cardRect.left + cardRect.width / 2;
            const distance = Math.abs(containerCenter - cardCenter);

            if (distance < minDistance) {
                minDistance = distance;
                closestCard = card;
            }
        });

        productCards.forEach(card => {
            if (card === closestCard) {
                card.classList.add('focused');
            } else {
                card.classList.remove('focused');
            }
        });
        
        requestAnimationFrame(updateFocusedCard);
    }

    // Start the focus tracking loop
    if (productSlider && productCards.length > 0) {
        requestAnimationFrame(updateFocusedCard);
    }
});
