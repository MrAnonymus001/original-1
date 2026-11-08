
(function() {
  const integrationsData = {"categories":[{"title":"Phone systems","blurb":"Keep your number. The agent answers on the line you already have.","platforms":[{"name":"Twilio","icon":"twilio","hex":"F22F46"},{"name":"RingCentral","domain":"ringcentral.com"},{"name":"Telnyx","domain":"telnyx.com"},{"name":"Vonage","domain":"vonage.com"},{"name":"Zoom Phone","domain":"zoom.us"},{"name":"Microsoft Teams Phone","domain":"teams.microsoft.com"},{"name":"Dialpad","domain":"dialpad.com"},{"name":"Aircall","icon":"aircall","hex":"00B388"},{"name":"Nextiva","domain":"nextiva.com"},{"name":"8x8","domain":"8x8.com"},{"name":"OpenPhone","domain":"openphone.com"},{"name":"Grasshopper","domain":"grasshopper.com"},{"name":"Ooma","domain":"ooma.com"},{"name":"Google Voice","domain":"voice.google.com"},{"name":"Asterisk / FreePBX","icon":"asterisk","hex":"F68F1E"}]},{"title":"Calendars & booking","blurb":"Checks real availability and books the slot while the caller is on the line.","platforms":[{"name":"Google Calendar","icon":"googlecalendar","hex":"4285F4"},{"name":"Outlook","domain":"outlook.com"},{"name":"Microsoft Bookings","domain":"bookings.microsoft.com"},{"name":"Calendly","icon":"calendly","hex":"006BFF"},{"name":"Cal.com","domain":"cal.com"},{"name":"Acuity Scheduling","domain":"acuityscheduling.com"},{"name":"Square Appointments","icon":"square","hex":"FFFFFF"},{"name":"Setmore","domain":"setmore.com"},{"name":"SimplyBook.me","domain":"simplybook.me"},{"name":"Zoho Bookings","domain":"zoho.com"}]},{"title":"CRMs","blurb":"New leads, notes, and call outcomes land where your team already works.","platforms":[{"name":"GoHighLevel","domain":"gohighlevel.com"},{"name":"HubSpot","icon":"hubspot","hex":"FF7A59"},{"name":"Salesforce","icon":"salesforce","hex":"00A1E0"},{"name":"Pipedrive","domain":"pipedrive.com"},{"name":"Zoho CRM","domain":"zoho.com"},{"name":"Close","domain":"close.com"},{"name":"Keap","domain":"keap.com"},{"name":"ActiveCampaign","domain":"activecampaign.com"},{"name":"monday.com","domain":"monday.com"},{"name":"Airtable","icon":"airtable","hex":"18BFFF"},{"name":"Google Sheets","icon":"googlesheets","hex":"34A853"},{"name":"Notion","icon":"notion","hex":"FFFFFF"}]},{"title":"Messaging & handoff","blurb":"Texts the caller, alerts your team, and routes urgent calls to a human.","platforms":[{"name":"SMS","icon":"twilio","hex":"F22F46"},{"name":"WhatsApp","icon":"whatsapp","hex":"25D366"},{"name":"Slack","icon":"slack","hex":"E01E5A"},{"name":"Microsoft Teams","domain":"teams.microsoft.com"},{"name":"Gmail","icon":"gmail","hex":"EA4335"},{"name":"Outlook Mail","domain":"outlook.com"},{"name":"Podium","domain":"podium.com"},{"name":"Weave","domain":"getweave.com"},{"name":"Intercom","icon":"intercom","hex":"6AFDEF"},{"name":"Zendesk","icon":"zendesk","hex":"FFFFFF"},{"name":"Freshdesk","domain":"freshdesk.com"},{"name":"Front","domain":"front.com"}]},{"title":"Payments & accounting","blurb":"Take deposits, send payment links, and look up invoices on the call.","platforms":[{"name":"Stripe","icon":"stripe","hex":"635BFF"},{"name":"Square","icon":"square","hex":"FFFFFF"},{"name":"PayPal","icon":"paypal","hex":"0070E0"},{"name":"Authorize.net","domain":"authorize.net"},{"name":"Shopify","icon":"shopify","hex":"7AB55C"},{"name":"QuickBooks","icon":"quickbooks","hex":"2CA01C"},{"name":"Xero","domain":"xero.com"}]},{"title":"Automation & data","blurb":"Custom workflows and backends when off the shelf isn't enough.","platforms":[{"name":"Zapier","domain":"zapier.com"},{"name":"Make","icon":"make","hex":"A259FF"},{"name":"n8n","icon":"n8n","hex":"EA4B71"},{"name":"REST APIs & webhooks","domain":"postman.com"},{"name":"Supabase","icon":"supabase","hex":"3FCF8E"},{"name":"PostgreSQL","icon":"postgresql","hex":"6B8FE8"},{"name":"Firebase","icon":"firebase","hex":"FFA000"},{"name":"Google Drive","icon":"googledrive","hex":"4285F4"},{"name":"SharePoint","domain":"sharepoint.com"}]}],"industries":[{"title":"Home services","platforms":[{"name":"ServiceTitan","domain":"servicetitan.com"},{"name":"Jobber","domain":"getjobber.com"},{"name":"Housecall Pro","domain":"housecallpro.com"},{"name":"FieldEdge","domain":"fieldedge.com"},{"name":"Service Fusion","domain":"servicefusion.com"},{"name":"Workiz","domain":"workiz.com"},{"name":"Successware","domain":"successware.com"},{"name":"ServiceM8","domain":"servicem8.com"},{"name":"Kickserv","domain":"kickserv.com"}]},{"title":"Roofing & construction","platforms":[{"name":"AccuLynx","domain":"acculynx.com"},{"name":"JobNimbus","domain":"jobnimbus.com"},{"name":"Roofr","domain":"roofr.com"},{"name":"Buildertrend","domain":"buildertrend.com"},{"name":"JobTread","domain":"jobtread.com"},{"name":"CompanyCam","domain":"companycam.com"}]},{"title":"Medical & clinics","platforms":[{"name":"athenahealth","domain":"athenahealth.com"},{"name":"eClinicalWorks","domain":"eclinicalworks.com"},{"name":"Tebra","domain":"tebra.com"},{"name":"DrChrono","domain":"drchrono.com"},{"name":"Elation Health","domain":"elationhealth.com"},{"name":"AdvancedMD","domain":"advancedmd.com"},{"name":"NextGen","domain":"nextgen.com"},{"name":"ModMed","domain":"modmed.com"},{"name":"Healthie","domain":"gethealthie.com"},{"name":"Spruce Health","domain":"sprucehealth.com"},{"name":"Hint Health","domain":"hint.com"}]},{"title":"Dental","platforms":[{"name":"Dentrix","domain":"dentrix.com"},{"name":"Eaglesoft","domain":"pattersondental.com"},{"name":"Open Dental","domain":"opendental.com"},{"name":"Curve Dental","domain":"curvedental.com"},{"name":"NexHealth","domain":"nexhealth.com"}]},{"title":"Therapy & wellness","platforms":[{"name":"SimplePractice","domain":"simplepractice.com"},{"name":"Jane App","domain":"jane.app"},{"name":"TherapyNotes","domain":"therapynotes.com"},{"name":"Practice Better","domain":"practicebetter.io"},{"name":"IntakeQ","domain":"intakeq.com"}]},{"title":"Salons, med spas & fitness","platforms":[{"name":"Salon Sync","domain":"salon-sync.co"},{"name":"Meevo","domain":"meevo.com"},{"name":"Zenoti","domain":"zenoti.com"},{"name":"Boulevard","domain":"joinblvd.com"},{"name":"Mangomint","domain":"mangomint.com"},{"name":"Mindbody","domain":"mindbodyonline.com"},{"name":"Vagaro","domain":"vagaro.com"},{"name":"Phorest","domain":"phorest.com"},{"name":"GlossGenius","domain":"glossgenius.com"},{"name":"Fresha","domain":"fresha.com"}]},{"title":"Legal","platforms":[{"name":"Clio","domain":"clio.com"},{"name":"MyCase","domain":"mycase.com"},{"name":"Filevine","domain":"filevine.com"},{"name":"PracticePanther","domain":"practicepanther.com"},{"name":"Smokeball","domain":"smokeball.com"},{"name":"Lawmatics","domain":"lawmatics.com"},{"name":"CASEpeer","domain":"casepeer.com"},{"name":"Litify","domain":"litify.com"}]},{"title":"Real estate & property","platforms":[{"name":"Follow Up Boss","domain":"followupboss.com"},{"name":"Lofty","domain":"lofty.com"},{"name":"Sierra Interactive","domain":"sierrainteractive.com"},{"name":"AppFolio","domain":"appfolio.com"},{"name":"Buildium","domain":"buildium.com"},{"name":"Yardi","domain":"yardi.com"},{"name":"Rent Manager","domain":"rentmanager.com"},{"name":"Guesty","domain":"guesty.com"},{"name":"Hostaway","domain":"hostaway.com"}]},{"title":"Auto, truck & fleet","platforms":[{"name":"Tekmetric","domain":"tekmetric.com"},{"name":"Shopmonkey","domain":"shopmonkey.io"},{"name":"Shop-Ware","domain":"shop-ware.com"},{"name":"Fullbay","domain":"fullbay.com"},{"name":"Mitchell 1","domain":"mitchell1.com"},{"name":"CDK Global","domain":"cdkglobal.com"},{"name":"VinSolutions","domain":"vinsolutions.com"},{"name":"DealerSocket","domain":"dealersocket.com"}]},{"title":"Restaurants & hospitality","platforms":[{"name":"Toast","domain":"toasttab.com"},{"name":"OpenTable","domain":"opentable.com"},{"name":"Resy","domain":"resy.com"},{"name":"SevenRooms","domain":"sevenrooms.com"},{"name":"Tock","domain":"exploretock.com"},{"name":"Cloudbeds","domain":"cloudbeds.com"}]},{"title":"Insurance","platforms":[{"name":"Applied Epic","domain":"appliedsystems.com"},{"name":"EZLynx","domain":"ezlynx.com"},{"name":"HawkSoft","domain":"hawksoft.com"},{"name":"AgencyZoom","domain":"agencyzoom.com"},{"name":"QQCatalyst","domain":"qqcatalyst.com"}]},{"title":"Veterinary","platforms":[{"name":"ezyVet","domain":"ezyvet.com"},{"name":"Cornerstone","domain":"idexx.com"},{"name":"Vetspire","domain":"vetspire.com"},{"name":"Shepherd","domain":"shepherd.vet"},{"name":"AVImark","domain":"covetrus.com"}]},{"title":"Self storage","platforms":[{"name":"SiteLink","domain":"sitelink.com"},{"name":"storEDGE","domain":"storedge.com"},{"name":"Easy Storage Solutions","domain":"easystoragesolutions.com"}]}]};

  const calls = [
    { id: "lovejoy", logo: "images/lovejoyclinic.com.png", client: "LoveJoy Hormone Clinic", kind: "Inbound · After hours patient intake", src: "lovejoy-demo.mp3", agent: "Ellie" },
    { id: "roofing", logo: "images/247roofingsolutions.com.png", client: "24/7 Restoration & Roofing", kind: "Inbound · Roofing receptionist", src: "roofing-demo.mp3", agent: "Receptionist" },
    { id: "merx", logo: "images/merx.png", client: "Merx Truck & Trailer", kind: "Inbound · After hours receptionist", src: "merx-demo.mp3", agent: "Chet" },
    { id: "funeral", logo: "images/funeralbuddy.png", client: "Funeral Buddy", kind: "Outbound · Sales appointment setter", src: "funeral-demo.mp3", agent: "Sales agent" },
    { id: "tutor", logo: "images/tutorabc.com.png", client: "TutorABC Brazil", kind: "Inbound · Course enrollment", src: "tutor-demo.mp3", agent: "Camila" }
  ];

  let transcripts = {"lovejoy":[{"s":"a","t":0.37,"x":"Thanks for calling LoveJoy Hormone Clinic, I'm Ellie, an AI assistant on a recorded line. You can talk to me like a normal person. How can I help you today?"},{"s":"c","t":11.41,"x":"Wanna see if I could get a consultant."},{"s":"a","t":14.69,"x":"Sure, you're looking to talk to someone about getting started. Just to point you in the right direction, are you a new or existing patient?"},{"s":"c","t":22.85,"x":"New."},{"s":"a","t":25.2,"x":"Okay, I can help you get started. Can you spell your first and last name?"},{"s":"c","t":30.97,"x":"A-N-D-R-E-W, [[11]]."},{"s":"a","t":37.43,"x":"So that's A-N-D-R-E-W [[11]], right?"},{"s":"c","t":43.6,"x":"Yes."},{"s":"a","t":45.89,"x":"And can I use the number you're calling from?"},{"s":"c","t":48.98,"x":"Yes."},{"s":"a","t":51.4,"x":"Okay. What's your date of birth?"},{"s":"c","t":54.38,"x":"[[14]]."},{"s":"a","t":59.48,"x":"And just for the chart, male or female?"},{"s":"c","t":63.03,"x":"Male."},{"s":"a","t":65.43,"x":"Okay. Do you prefer that we call you back in the morning or afternoon, or does it not matter?"},{"s":"c","t":71.66,"x":"It doesn't matter."},{"s":"a","t":74.48,"x":"And how did you hear about LoveJoy?"},{"s":"c","t":78.26,"x":"One of my friends goes to you guys."},{"s":"a","t":81.85,"x":"Have you ever had hormone therapy before?"},{"s":"c","t":85.51,"x":"No."},{"s":"a","t":87.67,"x":"Okay. What made you reach out to LoveJoy?"},{"s":"c","t":92.13,"x":"Just to see if I could use it, or benefit from it."},{"s":"a","t":100.24,"x":"Makes sense. What kind of treatment are you interested in? Like pellets, injections, or creams? Or if you're not sure yet, that's totally fine."},{"s":"c","t":108.16,"x":"Probably pellet. Or not sure."},{"s":"a","t":112.04,"x":"Okay. Is there anything else our team should know before they reach out?"},{"s":"c","t":116.29,"x":"No."},{"s":"a","t":117.86,"x":"You're all set. Our team will reach out to get your lab appointment booked. Is there anything else I can help you with?"},{"s":"c","t":124.66,"x":"That should be it."},{"s":"a","t":127.5,"x":"Thanks for calling LoveJoy. Take care."}],"roofing":[{"s":"a","t":0.26,"x":"Hello, thank you for calling 24/7 Restoration and Roofing. What can I help you with today?"},{"s":"c","t":6.48,"x":"Hi, I was referred to you by a neighborhood Facebook page. I actually live in [[8]] in Prosper, and I was wondering, I think I have some water damage potentially from a roof issue in my upper bedroom. I was wondering if I could get somebody out to take a look at that."},{"s":"a","t":24.16,"x":"I would be happy to get you connected with our team. May I ask, what is your full name and the address that this call is related to?"},{"s":"c","t":31.04,"x":"Yep, my name is [[3]], [[5]], and the last name is [[10]], [[19]]. And the address is [[28]]."},{"s":"a","t":51.46,"x":"Please hold on while I transfer your call to our team."},{"s":"c","t":54.5,"x":"Thank you."}],"merx":[{"s":"a","t":0.4,"x":"Merx Truck and Trailer Repair shop, this is Chet. Who am I speaking with?"},{"s":"c","t":5,"x":"Chet, this is Eddie. I was wondering, did I leave a message with you in regards to an engine? A QX60?"},{"s":"a","t":12.5,"x":"Hey Eddie, let me see. Are you calling about a vehicle that's already in the shop, or do you need to schedule a new service?"},{"s":"c","t":22.5,"x":"I was wondering about a vehicle to have a service scheduled."},{"s":"a","t":33.1,"x":"Gotcha. Let me get your info. Spell your name for me please."},{"s":"c","t":38,"x":"E D D I E. V as in Victor, A N C E."},{"s":"a","t":44.6,"x":"Thanks Eddie. And what's the vehicle make and model?"},{"s":"c","t":49.6,"x":"It's a 2017 QX60."},{"s":"a","t":55.6,"x":"All right. What kind of service are you looking for?"},{"s":"c","t":58.4,"x":"I'm looking for a remanufactured engine."},{"s":"a","t":64.7,"x":"Gotcha. Just so you know, we only use components we source, to guarantee the quality of our work. So bringing your own parts like a remanufactured engine won't be possible."},{"s":"c","t":78.2,"x":"Will you be able to source a remanufactured engine? The phasers on it go out once they get over a certain mileage, and it's got four phasers and a myriad of timing chains."},{"s":"a","t":121.5,"x":"I hear you, Eddie. We do source parts for repairs, but I can't promise specifics on the engine. Drop it off any time Monday to Friday, eight to five, and Mark the service advisor will take care of it. Is this the best number to reach you at?"},{"s":"c","t":140.1,"x":"Yes, it is."},{"s":"c","t":158.7,"x":"When you source it, could you call me back to let me know if you can locate a remanufactured engine?"},{"s":"a","t":167.1,"x":"Gotcha, Eddie. I'll have Mark the service advisor call you back as soon as they can. About the cost, we need to look at it first to give an accurate quote. Sound good?"},{"s":"c","t":178.2,"x":"That sounds good. That completes my concern."},{"s":"a","t":186,"x":"All right, Eddie, thanks for calling. Have a good one and take care out there."}],"funeral":[{"s":"a","t":0,"x":"G'day Jason. Just giving you a quick buzz about a tool saving funeral homes heaps of admin time. Give me 30 seconds?"},{"s":"c","t":9.8,"x":"Absolutely."},{"s":"a","t":10.1,"x":"Picture this, Jason. It's late, you're buried in paperwork, chasing forms, handling payments, all while supporting grieving families. At this rate you'll need a funeral for your free time. That's where Funeral Buddy comes in. Would you be against seeing how it works?"},{"s":"c","t":37.6,"x":"I wouldn't be, but it sounds a lot like the software that we already use."},{"s":"a","t":42.7,"x":"Fair call, Jason. A lot of funeral homes say the same thing until they see how Funeral Buddy is built specifically for independent directors like yourself. I'll lock in a quick 15 minute demo. What day and time works best for you, mate?"},{"s":"c","t":60.4,"x":"I could do Monday, sort of between 8:30 and 9:30, somewhere around there."},{"s":"a","t":69.5,"x":"Let me just check if we've got a spot available for Monday morning. All right Jason, the closest available time we've got is Tuesday at 9am. Would that work for you?"},{"s":"c","t":80.8,"x":"It wouldn't. I'll be out of town on Tuesday. So probably maybe Wednesday."},{"s":"a","t":86.7,"x":"Let me check Wednesday morning. Looks like Wednesday's booked out too, Jason. The next available time is Thursday at 9am. Would that suit you, mate?"},{"s":"c","t":98.5,"x":"Yeah, I think that would work."},{"s":"a","t":109.8,"x":"Perfect. I've booked you for a demo of Funeral Buddy on Thursday at 9am, and I'll send the confirmation to your email. Does that sound correct?"},{"s":"c","t":119.8,"x":"Yeah."},{"s":"a","t":123.8,"x":"Perfect. You'll get confirmation shortly. Thanks for your time, Jason."}],"tutor":[{"s":"a","t":0,"x":"Hello, this is Camila. How can I help you today?"},{"s":"c","t":4,"x":"Hey Camila, I was just wondering about your classes, what time they're at, and maybe how much they cost."},{"s":"a","t":16,"x":"We offer classes at 8:30am and 8:30pm Brasilia time, every day. The program costs just 10 USD per month for access to 8 classes. Would you be interested in trying a free class?"},{"s":"c","t":30,"x":"Yeah. And what is it that the classes are teaching?"},{"s":"a","t":34,"x":"Our classes focus on English language learning tailored to your goals. Would you like to give a free class a try? If so, could I have your name?"},{"s":"c","t":49,"x":"Wait, so these are English classes? What if I already speak English?"},{"s":"a","t":51.5,"x":"If you already speak English, we can help you improve your fluency, vocabulary, or even business communication skills, depending on your needs. Would you like to try a free class?"},{"s":"c","t":72,"x":"Yeah, my name is Sarah. Can I do the latest class that you offer?"},{"s":"a","t":77,"x":"Great to meet you, Sarah. To try the latest class, visit our website and fill out the form to schedule your free trial class. Is there anything else I can help with?"},{"s":"c","t":87,"x":"No, thank you."},{"s":"a","t":89,"x":"Goodbye."}]};

  function formatTime(s) {
    if (!s || isNaN(s)) return "0:00";
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return m + ":" + (sec < 10 ? "0" : "") + sec;
  }

  function initPlayer() {
    let audio = document.querySelector('audio[src*="-demo.mp3"]') || document.querySelector('audio');
    if (!audio) {
      audio = document.createElement('audio');
      document.body.appendChild(audio);
    }

    const headerP = Array.from(document.querySelectorAll('p')).find(p => p.textContent.trim() === 'Real client calls');
    if (!headerP) return;
    const widgetCard = headerP.closest('.rounded-\\[28px\\]') || headerP.closest('.border') || headerP.parentElement.parentElement;
    if (!widgetCard) return;

    const kindEl = widgetCard.querySelector('p.uppercase.tracking-\\[0\\.18em\\]') || widgetCard.querySelector('p.uppercase');
    const logoImg = widgetCard.querySelector('img.h-10.w-10');
    const titleH3 = widgetCard.querySelector('h3.text-2xl');
    const canvas = widgetCard.querySelector('canvas');
    const playBtn = widgetCard.querySelector('button[aria-label="Play call"]') || widgetCard.querySelector('button.bg-teal-300');
    const scrubberContainer = widgetCard.querySelector('.cursor-pointer.rounded-full');
    const progressFill = scrubberContainer ? scrubberContainer.querySelector('div') : null;
    const timeSpans = widgetCard.querySelectorAll('.tabular-nums span');
    const curTimeSpan = timeSpans[0];
    const durTimeSpan = timeSpans[1];
    
    const moreCallsList = widgetCard.querySelector('.h-\\[118px\\]');
    const callButtons = moreCallsList ? Array.from(moreCallsList.querySelectorAll('button')) : [];
    const transcriptContainer = widgetCard.querySelector('.overflow-y-auto.px-5') || widgetCard.querySelector('.h-\\[340px\\]') || widgetCard.querySelector('.sm\\:h-\\[420px\\]');

    let currentIndex = 0;
    let isPlaying = false;
    let hasStarted = false;
    audio.volume = 1.0;
    audio.muted = false;

    function setupAudioContext() {
      audio.volume = 1.0;
      audio.muted = false;
    }

    function renderTranscript() {
      if (!transcriptContainer) return;
      const currentCall = calls[currentIndex];
      const list = transcripts[currentCall.id] || [];
      const curTime = audio.currentTime || 0;

      const visibleItems = hasStarted 
        ? list.filter(item => item.t <= curTime + 0.15)
        : list.slice(0, 2);

      let html = '<div class="h-12"></div>';

      visibleItems.forEach((item, idx) => {
        const isAI = item.s === 'a';
        const isLatest = hasStarted && idx === visibleItems.length - 1 && isPlaying;

        if (isAI) {
          html += `
            <div class="mb-5 flex gap-3" style="opacity: 1; transform: none;">
              <span class="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full text-[10px] font-semibold bg-teal-300/15 text-teal-200">AI</span>
              <div class="max-w-[85%]">
                <p class="mb-1 text-[11px] uppercase tracking-[0.14em] text-white/30">${currentCall.agent} · AI agent</p>
                <p class="inline-block rounded-2xl px-4 py-2.5 text-[15px] leading-relaxed transition-colors bg-teal-300/[0.08] text-white/90 ${isLatest ? 'ring-1 ring-teal-300/40' : ''}">${item.x}</p>
              </div>
            </div>`;
        } else {
          html += `
            <div class="mb-5 flex gap-3 flex-row-reverse text-right" style="opacity: 1; transform: none;">
              <span class="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full text-[10px] font-semibold bg-white/10 text-white/60">C</span>
              <div class="max-w-[85%]">
                <p class="mb-1 text-[11px] uppercase tracking-[0.14em] text-white/30">Caller</p>
                <p class="inline-block rounded-2xl px-4 py-2.5 text-[15px] leading-relaxed transition-colors bg-white/[0.05] text-white/75 ${isLatest ? 'ring-1 ring-teal-300/40' : ''}">${item.x}</p>
              </div>
            </div>`;
        }
      });

      if (!hasStarted) {
        html += '<p class="mt-2 text-center text-sm text-white/40">Press play to hear the full call</p>';
      }

      transcriptContainer.innerHTML = html;
      transcriptContainer.scrollTo({ top: transcriptContainer.scrollHeight, behavior: 'smooth' });
    }

    function selectCall(idx, autoPlay) {
      if (idx === currentIndex && isPlaying) {
        audio.pause();
        return;
      }

      currentIndex = idx;
      const c = calls[idx];

      if (kindEl) kindEl.textContent = c.kind;
      if (logoImg) logoImg.src = c.logo;
      if (titleH3) titleH3.textContent = c.client;

      callButtons.forEach((btn, i) => {
        if (i === idx) {
          btn.className = "flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-left text-sm transition bg-white/[0.07] text-white";
        } else {
          btn.className = "flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-left text-sm transition text-white/50 hover:bg-white/[0.04] hover:text-white/80";
        }
      });

      audio.src = c.src;
      audio.currentTime = 0;
      hasStarted = false;
      renderTranscript();
      updatePlayButtonUI(false);
      if (progressFill) progressFill.style.width = '0%';
      if (curTimeSpan) curTimeSpan.textContent = '0:00';

      if (autoPlay) {
        setupAudioContext();
        
        hasStarted = true;
        audio.play().then(() => updatePlayButtonUI(true)).catch(() => {});
      }
    }

    function updatePlayButtonUI(playing) {
      isPlaying = playing;
      if (!playBtn) return;
      playBtn.setAttribute('aria-label', playing ? 'Pause call' : 'Play call');

      if (playing) {
        playBtn.innerHTML = `
          <svg viewBox="0 0 24 24" class="h-5 w-5" fill="currentColor">
            <rect x="6" y="5" width="4" height="14" rx="1.2"></rect>
            <rect x="14" y="5" width="4" height="14" rx="1.2"></rect>
          </svg>`;
      } else {
        playBtn.innerHTML = `
          ${!hasStarted ? '<span class="absolute inset-0 rounded-full animate-[pulse-dot_1.8s_ease-out_infinite]"></span>' : ''}
          <svg viewBox="0 0 24 24" class="ml-0.5 h-5 w-5" fill="currentColor">
            <path d="M8 5.5v13a1 1 0 0 0 1.5.86l11-6.5a1 1 0 0 0 0-1.72l-11-6.5A1 1 0 0 0 8 5.5Z"></path>
          </svg>`;
      }
    }

    if (playBtn) {
      playBtn.addEventListener('click', function(e) {
        e.preventDefault();
        setupAudioContext();
        

        if (audio.paused) {
          hasStarted = true;
          audio.play().then(() => {
            updatePlayButtonUI(true);
            renderTranscript();
          }).catch(err => {
            console.error('Play error:', err);
          });
        } else {
          audio.pause();
          updatePlayButtonUI(false);
        }
      });
    }

    if (scrubberContainer) {
      scrubberContainer.addEventListener('click', function(e) {
        if (!audio.duration) return;
        const rect = scrubberContainer.getBoundingClientRect();
        const pos = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
        audio.currentTime = pos * audio.duration;
        hasStarted = true;
        renderTranscript();
      });
    }

    callButtons.forEach((btn, idx) => {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        selectCall(idx, true);
      });
    });

    audio.addEventListener('play', () => updatePlayButtonUI(true));
    audio.addEventListener('pause', () => updatePlayButtonUI(false));
    audio.addEventListener('ended', () => {
      updatePlayButtonUI(false);
      if (progressFill) progressFill.style.width = '0%';
    });

    audio.addEventListener('timeupdate', () => {
      if (audio.duration) {
        const pct = (audio.currentTime / audio.duration) * 100;
        if (progressFill) progressFill.style.width = pct + '%';
        if (curTimeSpan) curTimeSpan.textContent = formatTime(audio.currentTime);
      }
      renderTranscript();
    });

    audio.addEventListener('loadedmetadata', () => {
      if (durTimeSpan) durTimeSpan.textContent = formatTime(audio.duration);
    });

    if (canvas) {
      const ctx = canvas.getContext('2d');
      const bars = 56;
      const heights = Array(bars).fill(0);
      const freqData = new Uint8Array(128);

      function draw(time) {
        requestAnimationFrame(draw);
        const dpr = window.devicePixelRatio || 1;
        const w = canvas.clientWidth;
        const h = canvas.clientHeight;

        if (canvas.width !== w * dpr) {
          canvas.width = w * dpr;
          canvas.height = h * dpr;
        }

        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.clearRect(0, 0, w, h);

        const barWidth = (w - 165) / bars;

        for (let i = 0; i < bars; i++) {
          const normDist = Math.abs(i - bars / 2) / (bars / 2);
          let targetH;
          if (isPlaying) {
            const speechWave = Math.sin(time * 0.012 + i * 0.38) * Math.cos(time * 0.007 + i * 0.22);
            const pulse = (Math.sin(time * 0.02) + 1.2) * 0.45;
            targetH = Math.max(0.12, Math.abs(speechWave) * pulse * (1 - normDist * 0.45) * 1.1);
          } else {
            targetH = 0.06 + 0.05 * Math.sin(time / 600 + 0.35 * i) * (1 - normDist);
          }

          heights[i] += (targetH - heights[i]) * 0.28;
          const bh = Math.max(3, Math.min(1, heights[i]) * h * 0.92);
          const bx = i * (barWidth + 3);
          const by = (h - bh) / 2;
          const alpha = 0.35 + 0.65 * (1 - normDist);

          ctx.fillStyle = `rgba(94, 234, 212, ${alpha})`;
          ctx.beginPath();
          if (ctx.roundRect) {
            ctx.roundRect(bx, by, barWidth, bh, barWidth / 2);
          } else {
            ctx.rect(bx, by, barWidth, bh);
          }
          ctx.fill();
        }
      }

      requestAnimationFrame(draw);
    }

    selectCall(0, false);
  }

  // --- INTEGRATIONS TOGGLE CONTROLLER ---
  function initIntegrations() {
  const svgs = {"aircall":{"viewBox":"0 0 24 24","inner":"<title>Aircall</title><path d=\"M23.451 5.906a6.978 6.978 0 0 0-5.375-5.39C16.727.204 14.508 0 12 0S7.273.204 5.924.516a6.978 6.978 0 0 0-5.375 5.39C.237 7.26.034 9.485.034 12s.203 4.74.515 6.094a6.978 6.978 0 0 0 5.375 5.39C7.273 23.796 9.492 24 12 24s4.727-.204 6.076-.516a6.978 6.978 0 0 0 5.375-5.39c.311-1.354.515-3.578.515-6.094 0-2.515-.203-4.74-.515-6.094zm-5.873 12.396l-.003.001c-.428.152-1.165.283-2.102.377l-.147.014a.444.444 0 0 1-.45-.271 1.816 1.816 0 0 0-1.296-1.074c-.351-.081-.928-.134-1.58-.134s-1.229.053-1.58.134a1.817 1.817 0 0 0-1.291 1.062.466.466 0 0 1-.471.281 8 8 0 0 0-.129-.012c-.938-.094-1.676-.224-2.105-.377l-.003-.001a.76.76 0 0 1-.492-.713c0-.032.003-.066.005-.098.073-.979.666-3.272 1.552-5.89C8.5 8.609 9.559 6.187 10.037 5.714a1.029 1.029 0 0 1 .404-.26l.004-.002c.314-.106.892-.178 1.554-.178.663 0 1.241.071 1.554.178l.005.002a1.025 1.025 0 0 1 .405.26c.478.472 1.537 2.895 2.549 5.887.886 2.617 1.479 4.91 1.552 5.89.002.032.005.066.005.098a.76.76 0 0 1-.491.713z\"/>"},"airtable":{"viewBox":"0 0 24 24","inner":"<title>Airtable</title><path d=\"M11.992 1.966c-.434 0-.87.086-1.28.257L1.779 5.917c-.503.208-.49.908.012 1.116l8.982 3.558a3.266 3.266 0 0 0 2.454 0l8.982-3.558c.503-.196.503-.908.012-1.116l-8.957-3.694a3.255 3.255 0 0 0-1.272-.257zM23.4 8.056a.589.589 0 0 0-.222.045l-10.012 3.877a.612.612 0 0 0-.38.564v8.896a.6.6 0 0 0 .821.552L23.62 18.1a.583.583 0 0 0 .38-.551V8.653a.6.6 0 0 0-.6-.596zM.676 8.095a.644.644 0 0 0-.48.19C.086 8.396 0 8.53 0 8.69v8.355c0 .442.515.737.908.54l6.27-3.006.307-.147 2.969-1.436c.466-.22.43-.908-.061-1.092L.883 8.138a.57.57 0 0 0-.207-.044z\"/>"},"asterisk":{"viewBox":"0 0 24 24","inner":"<title>Asterisk</title><path d=\"M14.92474 1.7776c-1.5868-.006-2.72634.1583-4.0059.57625-.4307.1407-1.11947.41114-1.53049.60105s-1.17324.62818-1.69469.97591-1.31453.95274-1.76285 1.3415c-.4483.38876-1.13243 1.07288-1.52119 1.5212-.38875.44831-.93594 1.1598-1.21447 1.58005s-.52234.7479-.54218.72806c-.0821-.0821.68021-1.55226 1.21138-2.336l.57006-.8427-.61344.59485c-.33697.32716-.9366 1.0258-1.3353 1.55217s-.92949 1.32942-1.17729 1.78453c-.2478.45513-.59826 1.25105-.77764 1.76906l-.3253.94182v.18686c-.14567.47425-.20618.82312-.20545 1.37674.003.60684.0609 1.08074.20544 1.61182v.19538l.26954.79313c.14744.4362.43545 1.08232.64132 1.43444.20587.35211.6835.96441 1.05957 1.36318.37607.39876.97836.9227 1.3384 1.1618 1.07417.71335 2.16188 1.14074 3.5288 1.38487.43621.0779 1.3454.14382 2.01998.14871.6746.005 1.6949-.0605 2.26785-.1456s1.5643-.30574 2.20278-.48952c.6385-.18377 1.62088-.5359 2.1842-.78383l1.02548-.44923.65062.19518c.73972.2239 4.10778.98772 4.15461.94184.0169-.0165-.36632-.8263-.85199-1.80002l-.88297-1.77214.78383-.94184c.43255-.518 1.03592-1.3173 1.3384-1.77524.3025-.45795.76326-1.2833 1.0255-1.8341.26222-.5508.56867-1.3353.68158-1.74426.11292-.40896.25185-1.1359.30672-1.61724.0689-.60404.0673-1.14149-.006-1.73496-.0586-.4729-.21192-1.16555-.34079-1.53668s-.42997-1.01806-.6661-1.43754c-.54074-.96059-1.69132-2.13154-2.525-2.57147-.33479-.17667-.63723-.3222-.67539-.3222-.0382 0 .15568.17987.43374.39966.55794.44102 1.24622 1.27072 1.58625 1.91155l.22307.41516-.22307-.29743c-.12202-.16358-.55922-.63692-.97282-1.05027-.57349-.57315-.95288-.85022-1.59555-1.168-.548-.27098-1.18938-.48753-1.8341-.62273-.73249-.1536-1.36683-.20995-2.42895-.21377zm-.0496 1.09674c1.0863.002 1.5545.0494 2.15941.21068.4251.11334 1.07198.3469 1.43754.5205.47067.22351.88578.5356 1.41895 1.06885.57816.57824.84717.94844 1.16491 1.59555.22757.46348.4809 1.155.56076 1.53668.0799.3817.14467 1.03524.14562 1.45303.003 1.31394-.3635 2.79464-1.04098 4.198-.18427.38169-.52577.98397-.75905 1.3384s-.77228 1.0048-1.19588 1.44684c-.4236.44202-.76835.83226-.76835.86438 0 .0321.35691.60325.79313 1.27024s.79313 1.2502.79313 1.29503c0 .0448-.0232.0805-.0527.0805s-.69262-.24538-1.47162-.54527-1.53096-.54528-1.6699-.54528c-.13895 0-.49078.10608-.78384.23546-.96736.42709-2.77125.95962-3.74256 1.10604-.52582.0793-1.31114.13955-1.74736.13322-1.57475-.0228-2.75872-.2955-4.11434-.94803-.79414-.38227-1.07524-.58708-1.79383-1.30742-.64984-.65144-.93938-1.03166-1.21447-1.59865-.19842-.40895-.42859-1.01031-.5112-1.3353-.21292-.83764-.19273-2.23255.0465-3.1849.10833-.4313.4223-1.23948.69708-1.79693.2748-.55745.76385-1.36438 1.08745-1.79383s.9908-1.16322 1.48092-1.62963c.95198-.90593 2.10627-1.72182 3.23136-2.28333.97376-.48599 2.268-.92608 3.45134-1.1742.75897-.15914 1.35506-.21232 2.39797-.21068zM10.7033 5.2787l.0409 1.89897c.0351 1.63358.0207 1.89128-.1036 1.8436-.0794-.0305-.80422-.48575-1.61046-1.01155s-1.47836-.94257-1.49369-.92635c-.0823.0871-1.33617 2.22031-1.33627 2.27346-.00008.0346.73564.48078 1.63505.99141s1.63543.95078 1.63543.97805c0 .0273-.73602.46741-1.63543.97805s-1.63513.95676-1.63505.9914c.0001.0536 1.25446 2.18701 1.33724 2.27443.0159.0168.75297-.4196 1.63795-.9699l1.6091-1.0007-.0407 1.88715-.0405 1.88716h2.76277l-.0711-1.89394c-.0585-1.55786-.048-1.8797.0598-1.81397.0721.0439.73181.4535 1.46601.91028s1.41202.87183 1.50628.92228c.14504.0776.27851-.087.86864-1.07099.49096-.81865.66132-1.18318.57568-1.2321-.0669-.0382-.82975-.46984-1.69527-.95907l-1.57367-.88956.23527-.14813c.1294-.0815.88216-.51577 1.67281-.96526s1.44714-.82465 1.45884-.8336c.0117-.009-.2923-.53914-.67559-1.17826-.45485-.75844-.73775-1.13783-.81443-1.0923-.0646.0384-.49675.31373-.96023.6119-.46348.29815-1.1465.73747-1.5179.9763l-.6754.43412.0705-1.93634.0703-1.93654H12.085zM2.5788 9.24433c.00078-.00004.002 0 .003 0 .0273 0 .0496.0223.0496.0496s-.0223.0496-.0496.0496a.0497.0497 0 0 1-.0496-.0496c0-.0264.021-.0482.047-.0496z\"/>"},"calendly":{"viewBox":"0 0 24 24","inner":"<title>Calendly</title><path d=\"M19.655 14.262c.281 0 .557.023.828.064 0 .005-.005.01-.005.014-.105.267-.234.534-.381.786l-1.219 2.106c-1.112 1.936-3.177 3.127-5.411 3.127h-2.432c-2.23 0-4.294-1.191-5.412-3.127l-1.218-2.106a6.251 6.251 0 0 1 0-6.252l1.218-2.106C6.736 4.832 8.8 3.641 11.035 3.641h2.432c2.23 0 4.294 1.191 5.411 3.127l1.219 2.106c.147.252.271.519.381.786 0 .004.005.009.005.014-.267.041-.543.064-.828.064-1.816 0-2.501-.607-3.291-1.306-.764-.676-1.711-1.517-3.44-1.517h-1.029c-1.251 0-2.387.455-3.2 1.278-.796.805-1.233 1.904-1.233 3.099v1.411c0 1.196.437 2.295 1.233 3.099.813.823 1.949 1.278 3.2 1.278h1.034c1.729 0 2.676-.841 3.439-1.517.791-.703 1.471-1.306 3.287-1.301Zm.005-3.237c.399 0 .794-.036 1.179-.11-.002-.004-.002-.01-.002-.014-.073-.414-.193-.823-.349-1.218.731-.12 1.407-.396 1.986-.819 0-.004-.005-.013-.005-.018-.331-1.085-.832-2.101-1.489-3.03-.649-.915-1.435-1.719-2.331-2.395-1.867-1.398-4.088-2.138-6.428-2.138-1.448 0-2.855.28-4.175.841-1.273.543-2.423 1.315-3.407 2.299S2.878 6.552 2.341 7.83c-.557 1.324-.842 2.726-.842 4.175 0 1.448.281 2.855.842 4.174.542 1.274 1.314 2.423 2.298 3.407s2.129 1.761 3.407 2.299c1.324.556 2.727.841 4.175.841 2.34 0 4.561-.74 6.428-2.137a10.815 10.815 0 0 0 2.331-2.396c.652-.929 1.158-1.949 1.489-3.03 0-.004.005-.014.005-.018-.579-.423-1.255-.699-1.986-.819.161-.395.276-.804.349-1.218.005-.009.005-.014.005-.023.869.166 1.692.506 2.404 1.035.685.505.552 1.075.446 1.416C22.184 20.437 17.619 24 12.221 24c-6.625 0-12-5.375-12-12s5.37-12 12-12c5.398 0 9.963 3.563 11.471 8.464.106.341.239.915-.446 1.421-.717.529-1.535.873-2.404 1.034.128.716.128 1.45 0 2.166-.387-.074-.782-.11-1.182-.11-4.184 0-3.968 2.823-6.736 2.823h-1.029c-1.899 0-3.15-1.357-3.15-3.095v-1.411c0-1.738 1.251-3.094 3.15-3.094h1.034c2.768 0 2.552 2.823 6.731 2.827Z\"/>"},"firebase":{"viewBox":"0 0 24 24","inner":"<title>Firebase</title><path d=\"M19.455 8.369c-.538-.748-1.778-2.285-3.681-4.569-.826-.991-1.535-1.832-1.884-2.245a146 146 0 0 0-.488-.576l-.207-.245-.113-.133-.022-.032-.01-.005L12.57 0l-.609.488c-1.555 1.246-2.828 2.851-3.681 4.64-.523 1.064-.864 2.105-1.043 3.176-.047.241-.088.489-.121.738-.209-.017-.421-.028-.632-.033-.018-.001-.035-.002-.059-.003a7.46 7.46 0 0 0-2.28.274l-.317.089-.163.286c-.765 1.342-1.198 2.869-1.252 4.416-.07 2.01.477 3.954 1.583 5.625 1.082 1.633 2.61 2.882 4.42 3.611l.236.095.071.025.003-.001a9.59 9.59 0 0 0 2.941.568q.171.006.342.006c1.273 0 2.513-.249 3.69-.742l.008.004.313-.145a9.63 9.63 0 0 0 3.927-3.335c1.01-1.49 1.577-3.234 1.641-5.042.075-2.161-.643-4.304-2.133-6.371m-7.083 6.695c.328 1.244.264 2.44-.191 3.558-1.135-1.12-1.967-2.352-2.475-3.665-.543-1.404-.87-2.74-.974-3.975.48.157.922.366 1.315.622 1.132.737 1.914 1.902 2.325 3.461zm.207 6.022c.482.368.99.712 1.513 1.028-.771.21-1.565.302-2.369.273a8 8 0 0 1-.373-.022c.458-.394.869-.823 1.228-1.279zm1.347-6.431c-.516-1.957-1.527-3.437-3.002-4.398-.647-.421-1.385-.741-2.194-.95.011-.134.026-.268.043-.4.014-.113.03-.216.046-.313.133-.689.332-1.37.589-2.025.099-.25.206-.499.321-.74l.004-.008c.177-.358.376-.719.61-1.105l.092-.152-.003-.001c.544-.851 1.197-1.627 1.942-2.311l.288.341c.672.796 1.304 1.548 1.878 2.237 1.291 1.549 2.966 3.583 3.612 4.48 1.277 1.771 1.893 3.579 1.83 5.375-.049 1.395-.461 2.755-1.195 3.933-.694 1.116-1.661 2.05-2.8 2.708-.636-.318-1.559-.839-2.539-1.599.79-1.575.952-3.28.479-5.072zm-2.575 5.397c-.725.939-1.587 1.55-2.09 1.856-.081-.029-.163-.06-.243-.093l-.065-.026c-1.49-.616-2.747-1.656-3.635-3.01-.907-1.384-1.356-2.993-1.298-4.653.041-1.19.338-2.327.882-3.379.316-.07.638-.114.96-.131l.084-.002c.162-.003.324-.003.478 0 .227.011.454.035.677.07.073 1.513.445 3.145 1.105 4.852.637 1.644 1.694 3.162 3.144 4.515z\"/>"},"gmail":{"viewBox":"0 0 24 24","inner":"<title>Gmail</title><path d=\"M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z\"/>"},"googlecalendar":{"viewBox":"0 0 24 24","inner":"<title>Google Calendar</title><path d=\"M18.316 5.684H24v12.632h-5.684V5.684zM5.684 24h12.632v-5.684H5.684V24zM18.316 5.684V0H1.895A1.894 1.894 0 0 0 0 1.895v16.421h5.684V5.684h12.632zm-7.207 6.25v-.065c.272-.144.5-.349.687-.617s.279-.595.279-.982c0-.379-.099-.72-.3-1.025a2.05 2.05 0 0 0-.832-.714 2.703 2.703 0 0 0-1.197-.257c-.6 0-1.094.156-1.481.467-.386.311-.65.671-.793 1.078l1.085.452c.086-.249.224-.461.413-.633.189-.172.445-.257.767-.257.33 0 .602.088.816.264a.86.86 0 0 1 .322.703c0 .33-.12.589-.36.778-.24.19-.535.284-.886.284h-.567v1.085h.633c.407 0 .748.109 1.02.327.272.218.407.499.407.843 0 .336-.129.614-.387.832s-.565.327-.924.327c-.351 0-.651-.103-.897-.311-.248-.208-.422-.502-.521-.881l-1.096.452c.178.616.505 1.082.977 1.401.472.319.984.478 1.538.477a2.84 2.84 0 0 0 1.293-.291c.382-.193.684-.458.902-.794.218-.336.327-.72.327-1.149 0-.429-.115-.797-.344-1.105a2.067 2.067 0 0 0-.881-.689zm2.093-1.931l.602.913L15 10.045v5.744h1.187V8.446h-.827l-2.158 1.557zM22.105 0h-3.289v5.184H24V1.895A1.894 1.894 0 0 0 22.105 0zm-3.289 23.5l4.684-4.684h-4.684V23.5zM0 22.105C0 23.152.848 24 1.895 24h3.289v-5.184H0v3.289z\"/>"},"googledrive":{"viewBox":"0 0 24 24","inner":"<title>Google Drive</title><path d=\"M12.01 1.485c-2.082 0-3.754.02-3.743.047.01.02 1.708 3.001 3.774 6.62l3.76 6.574h3.76c2.081 0 3.753-.02 3.742-.047-.005-.02-1.708-3.001-3.775-6.62l-3.76-6.574zm-4.76 1.73a789.828 789.861 0 0 0-3.63 6.319L0 15.868l1.89 3.298 1.885 3.297 3.62-6.335 3.618-6.33-1.88-3.287C8.1 4.704 7.255 3.22 7.25 3.214zm2.259 12.653-.203.348c-.114.198-.96 1.672-1.88 3.287a423.93 423.948 0 0 1-1.698 2.97c-.01.026 3.24.042 7.222.042h7.244l1.796-3.157c.992-1.734 1.85-3.23 1.906-3.323l.104-.167h-7.249z\"/>"},"googlesheets":{"viewBox":"0 0 24 24","inner":"<title>Google Sheets</title><path d=\"M11.318 12.545H7.91v-1.909h3.41v1.91zM14.728 0v6h6l-6-6zm1.363 10.636h-3.41v1.91h3.41v-1.91zm0 3.273h-3.41v1.91h3.41v-1.91zM20.727 6.5v15.864c0 .904-.732 1.636-1.636 1.636H4.909a1.636 1.636 0 0 1-1.636-1.636V1.636C3.273.732 4.005 0 4.909 0h9.318v6.5h6.5zm-3.273 2.773H6.545v7.909h10.91v-7.91zm-6.136 4.636H7.91v1.91h3.41v-1.91z\"/>"},"hubspot":{"viewBox":"0 0 24 24","inner":"<title>HubSpot</title><path d=\"M18.164 7.93V5.084a2.198 2.198 0 001.267-1.978v-.067A2.2 2.2 0 0017.238.845h-.067a2.2 2.2 0 00-2.193 2.193v.067a2.196 2.196 0 001.252 1.973l.013.006v2.852a6.22 6.22 0 00-2.969 1.31l.012-.01-7.828-6.095A2.497 2.497 0 104.3 4.656l-.012.006 7.697 5.991a6.176 6.176 0 00-1.038 3.446c0 1.343.425 2.588 1.147 3.607l-.013-.02-2.342 2.343a1.968 1.968 0 00-.58-.095h-.002a2.033 2.033 0 102.033 2.033 1.978 1.978 0 00-.1-.595l.005.014 2.317-2.317a6.247 6.247 0 104.782-11.134l-.036-.005zm-.964 9.378a3.206 3.206 0 113.215-3.207v.002a3.206 3.206 0 01-3.207 3.207z\"/>"},"intercom":{"viewBox":"0 0 24 24","inner":"<title>Intercom</title><path d=\"M21 0H3C1.343 0 0 1.343 0 3v18c0 1.658 1.343 3 3 3h18c1.658 0 3-1.342 3-3V3c0-1.657-1.342-3-3-3zm-5.801 4.399c0-.44.36-.8.802-.8.44 0 .8.36.8.8v10.688c0 .442-.36.801-.8.801-.443 0-.802-.359-.802-.801V4.399zM11.2 3.994c0-.44.357-.799.8-.799s.8.359.8.799v11.602c0 .44-.357.8-.8.8s-.8-.36-.8-.8V3.994zm-4 .405c0-.44.359-.8.799-.8.443 0 .802.36.802.8v10.688c0 .442-.36.801-.802.801-.44 0-.799-.359-.799-.801V4.399zM3.199 6c0-.442.36-.8.802-.8.44 0 .799.358.799.8v7.195c0 .441-.359.8-.799.8-.443 0-.802-.36-.802-.8V6zM20.52 18.202c-.123.105-3.086 2.593-8.52 2.593-5.433 0-8.397-2.486-8.521-2.593-.335-.288-.375-.792-.086-1.128.285-.334.79-.375 1.125-.09.047.041 2.693 2.211 7.481 2.211 4.848 0 7.456-2.186 7.479-2.207.334-.289.839-.25 1.128.086.289.336.25.84-.086 1.128zm.281-5.007c0 .441-.36.8-.801.8-.441 0-.801-.36-.801-.8V6c0-.442.361-.8.801-.8.441 0 .801.357.801.8v7.195z\"/>"},"make":{"viewBox":"0 0 24 24","inner":"<title>Make</title><path d=\"M13.38 3.498c-.27 0-.511.19-.566.465L9.85 18.986a.578.578 0 0 0 .453.678l4.095.826a.58.58 0 0 0 .682-.455l2.963-15.021a.578.578 0 0 0-.453-.678l-4.096-.826a.589.589 0 0 0-.113-.012zm-5.876.098a.576.576 0 0 0-.516.318L.062 17.697a.575.575 0 0 0 .256.774l3.733 1.877a.578.578 0 0 0 .775-.258l6.926-13.781a.577.577 0 0 0-.256-.776L7.762 3.658a.571.571 0 0 0-.258-.062zm11.74.115a.576.576 0 0 0-.576.576v15.426c0 .318.258.578.576.578h4.178a.58.58 0 0 0 .578-.578V4.287a.578.578 0 0 0-.578-.576Z\"/>"},"n8n":{"viewBox":"0 0 24 24","inner":"<title>n8n</title><path d=\"M21.4737 5.6842c-1.1772 0-2.1663.8051-2.4468 1.8947h-2.8955c-1.235 0-2.289.893-2.492 2.111l-.1038.623a1.263 1.263 0 0 1-1.246 1.0555H11.289c-.2805-1.0896-1.2696-1.8947-2.4468-1.8947s-2.1663.8051-2.4467 1.8947H4.973c-.2805-1.0896-1.2696-1.8947-2.4468-1.8947C1.1311 9.4737 0 10.6047 0 12s1.131 2.5263 2.5263 2.5263c1.1772 0 2.1663-.8051 2.4468-1.8947h1.4223c.2804 1.0896 1.2696 1.8947 2.4467 1.8947 1.1772 0 2.1663-.8051 2.4468-1.8947h1.0008a1.263 1.263 0 0 1 1.2459 1.0555l.1038.623c.203 1.218 1.257 2.111 2.492 2.111h.3692c.2804 1.0895 1.2696 1.8947 2.4468 1.8947 1.3952 0 2.5263-1.131 2.5263-2.5263s-1.131-2.5263-2.5263-2.5263c-1.1772 0-2.1664.805-2.4468 1.8947h-.3692a1.263 1.263 0 0 1-1.246-1.0555l-.1037-.623A2.52 2.52 0 0 0 13.9607 12a2.52 2.52 0 0 0 .821-1.4794l.1038-.623a1.263 1.263 0 0 1 1.2459-1.0555h2.8955c.2805 1.0896 1.2696 1.8947 2.4468 1.8947 1.3952 0 2.5263-1.131 2.5263-2.5263s-1.131-2.5263-2.5263-2.5263m0 1.2632a1.263 1.263 0 0 1 1.2631 1.2631 1.263 1.263 0 0 1-1.2631 1.2632 1.263 1.263 0 0 1-1.2632-1.2632 1.263 1.263 0 0 1 1.2632-1.2631M2.5263 10.7368A1.263 1.263 0 0 1 3.7895 12a1.263 1.263 0 0 1-1.2632 1.2632A1.263 1.263 0 0 1 1.2632 12a1.263 1.263 0 0 1 1.2631-1.2632m6.3158 0A1.263 1.263 0 0 1 10.1053 12a1.263 1.263 0 0 1-1.2632 1.2632A1.263 1.263 0 0 1 7.579 12a1.263 1.263 0 0 1 1.2632-1.2632m10.1053 3.7895a1.263 1.263 0 0 1 1.2631 1.2632 1.263 1.263 0 0 1-1.2631 1.2631 1.263 1.263 0 0 1-1.2632-1.2631 1.263 1.263 0 0 1 1.2632-1.2632\"/>"},"notion":{"viewBox":"0 0 24 24","inner":"<title>Notion</title><path d=\"M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z\"/>"},"paypal":{"viewBox":"0 0 24 24","inner":"<title>PayPal</title><path d=\"M7.016 19.198h-4.2a.562.562 0 0 1-.555-.65L5.093.584A.692.692 0 0 1 5.776 0h7.222c3.417 0 5.904 2.488 5.846 5.5-.006.25-.027.5-.066.747A6.794 6.794 0 0 1 12.071 12H8.743a.69.69 0 0 0-.682.583l-.325 2.056-.013.083-.692 4.39-.015.087zM19.79 6.142c-.01.087-.01.175-.023.261a7.76 7.76 0 0 1-7.695 6.598H9.007l-.283 1.795-.013.083-.692 4.39-.134.843-.014.088H6.86l-.497 3.15a.562.562 0 0 0 .555.65h3.612c.34 0 .63-.249.683-.585l.952-6.031a.692.692 0 0 1 .683-.584h2.126a6.793 6.793 0 0 0 6.707-5.752c.306-1.95-.466-3.744-1.89-4.906z\"/>"},"postgresql":{"viewBox":"0 0 24 24","inner":"<title>PostgreSQL</title><path d=\"M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4794a9.449 9.449 0 0 0-.5159-.0816 8.044 8.044 0 0 0-1.3114-.1278c-1.1822-.0184-2.2038.2642-3.0498.8406-.8573-.3211-4.7888-1.645-7.2219.0788C.9359 2.1526.3086 3.8733.4302 6.3043c.0409.818.5069 3.334 1.2423 5.7436.4598 1.5065.9387 2.7019 1.4334 3.582.553.9942 1.1259 1.5933 1.7143 1.7895.4474.1491 1.1327.1441 1.8581-.7279.8012-.9635 1.5903-1.8258 1.9446-2.2069.4351.2355.9064.3625 1.39.3772a.0569.0569 0 0 0 .0004.0041 11.0312 11.0312 0 0 0-.2472.3054c-.3389.4302-.4094.5197-1.5002.7443-.3102.064-1.1344.2339-1.1464.8115-.0025.1224.0329.2309.0919.3268.2269.4231.9216.6097 1.015.6331 1.3345.3335 2.5044.092 3.3714-.6787-.017 2.231.0775 4.4174.3454 5.0874.2212.5529.7618 1.9045 2.4692 1.9043.2505 0 .5263-.0291.8296-.0941 1.7819-.3821 2.5557-1.1696 2.855-2.9059.1503-.8707.4016-2.8753.5388-4.1012.0169-.0703.0357-.1207.057-.1362.0007-.0005.0697-.0471.4272.0307a.3673.3673 0 0 0 .0443.0068l.2539.0223.0149.001c.8468.0384 1.9114-.1426 2.5312-.4308.6438-.2988 1.8057-1.0323 1.5951-1.6698zM2.371 11.8765c-.7435-2.4358-1.1779-4.8851-1.2123-5.5719-.1086-2.1714.4171-3.6829 1.5623-4.4927 1.8367-1.2986 4.8398-.5408 6.108-.13-.0032.0032-.0066.0061-.0098.0094-2.0238 2.044-1.9758 5.536-1.9708 5.7495-.0002.0823.0066.1989.0162.3593.0348.5873.0996 1.6804-.0735 2.9184-.1609 1.1504.1937 2.2764.9728 3.0892.0806.0841.1648.1631.2518.2374-.3468.3714-1.1004 1.1926-1.9025 2.1576-.5677.6825-.9597.5517-1.0886.5087-.3919-.1307-.813-.5871-1.2381-1.3223-.4796-.839-.9635-2.0317-1.4155-3.5126zm6.0072 5.0871c-.1711-.0428-.3271-.1132-.4322-.1772.0889-.0394.2374-.0902.4833-.1409 1.2833-.2641 1.4815-.4506 1.9143-1.0002.0992-.126.2116-.2687.3673-.4426a.3549.3549 0 0 0 .0737-.1298c.1708-.1513.2724-.1099.4369-.0417.156.0646.3078.26.3695.4752.0291.1016.0619.2945-.0452.4444-.9043 1.2658-2.2216 1.2494-3.1676 1.0128zm2.094-3.988-.0525.141c-.133.3566-.2567.6881-.3334 1.003-.6674-.0021-1.3168-.2872-1.8105-.8024-.6279-.6551-.9131-1.5664-.7825-2.5004.1828-1.3079.1153-2.4468.079-3.0586-.005-.0857-.0095-.1607-.0122-.2199.2957-.2621 1.6659-.9962 2.6429-.7724.4459.1022.7176.4057.8305.928.5846 2.7038.0774 3.8307-.3302 4.7363-.084.1866-.1633.3629-.2311.5454zm7.3637 4.5725c-.0169.1768-.0358.376-.0618.5959l-.146.4383a.3547.3547 0 0 0-.0182.1077c-.0059.4747-.054.6489-.115.8693-.0634.2292-.1353.4891-.1794 1.0575-.11 1.4143-.8782 2.2267-2.4172 2.5565-1.5155.3251-1.7843-.4968-2.0212-1.2217a6.5824 6.5824 0 0 0-.0769-.2266c-.2154-.5858-.1911-1.4119-.1574-2.5551.0165-.5612-.0249-1.9013-.3302-2.6462.0044-.2932.0106-.5909.019-.8918a.3529.3529 0 0 0-.0153-.1126 1.4927 1.4927 0 0 0-.0439-.208c-.1226-.4283-.4213-.7866-.7797-.9351-.1424-.059-.4038-.1672-.7178-.0869.067-.276.1831-.5875.309-.9249l.0529-.142c.0595-.16.134-.3257.213-.5012.4265-.9476 1.0106-2.2453.3766-5.1772-.2374-1.0981-1.0304-1.6343-2.2324-1.5098-.7207.0746-1.3799.3654-1.7088.5321a5.6716 5.6716 0 0 0-.1958.1041c.0918-1.1064.4386-3.1741 1.7357-4.4823a4.0306 4.0306 0 0 1 .3033-.276.3532.3532 0 0 0 .1447-.0644c.7524-.5706 1.6945-.8506 2.802-.8325.4091.0067.8017.0339 1.1742.081 1.939.3544 3.2439 1.4468 4.0359 2.3827.8143.9623 1.2552 1.9315 1.4312 2.4543-1.3232-.1346-2.2234.1268-2.6797.779-.9926 1.4189.543 4.1729 1.2811 5.4964.1353.2426.2522.4522.2889.5413.2403.5825.5515.9713.7787 1.2552.0696.087.1372.1714.1885.245-.4008.1155-1.1208.3825-1.0552 1.717-.0123.1563-.0423.4469-.0834.8148-.0461.2077-.0702.4603-.0994.7662zm.8905-1.6211c-.0405-.8316.2691-.9185.5967-1.0105a2.8566 2.8566 0 0 0 .135-.0406 1.202 1.202 0 0 0 .1342.103c.5703.3765 1.5823.4213 3.0068.1344-.2016.1769-.5189.3994-.9533.6011-.4098.1903-1.0957.333-1.7473.3636-.7197.0336-1.0859-.0807-1.1721-.151zm.5695-9.2712c-.0059.3508-.0542.6692-.1054 1.0017-.055.3576-.112.7274-.1264 1.1762-.0142.4368.0404.8909.0932 1.3301.1066.887.216 1.8003-.2075 2.7014a3.5272 3.5272 0 0 1-.1876-.3856c-.0527-.1276-.1669-.3326-.3251-.6162-.6156-1.1041-2.0574-3.6896-1.3193-4.7446.3795-.5427 1.3408-.5661 2.1781-.463zm.2284 7.0137a12.3762 12.3762 0 0 0-.0853-.1074l-.0355-.0444c.7262-1.1995.5842-2.3862.4578-3.4385-.0519-.4318-.1009-.8396-.0885-1.2226.0129-.4061.0666-.7543.1185-1.0911.0639-.415.1288-.8443.1109-1.3505.0134-.0531.0188-.1158.0118-.1902-.0457-.4855-.5999-1.938-1.7294-3.253-.6076-.7073-1.4896-1.4972-2.6889-2.0395.5251-.1066 1.2328-.2035 2.0244-.1859 2.0515.0456 3.6746.8135 4.8242 2.2824a.908.908 0 0 1 .0667.1002c.7231 1.3556-.2762 6.2751-2.9867 10.5405zm-8.8166-6.1162c-.025.1794-.3089.4225-.6211.4225a.5821.5821 0 0 1-.0809-.0056c-.1873-.026-.3765-.144-.5059-.3156-.0458-.0605-.1203-.178-.1055-.2844.0055-.0401.0261-.0985.0925-.1488.1182-.0894.3518-.1226.6096-.0867.3163.0441.6426.1938.6113.4186zm7.9305-.4114c.0111.0792-.049.201-.1531.3102-.0683.0717-.212.1961-.4079.2232a.5456.5456 0 0 1-.075.0052c-.2935 0-.5414-.2344-.5607-.3717-.024-.1765.2641-.3106.5611-.352.297-.0414.6111.0088.6356.1851z\"/>"},"quickbooks":{"viewBox":"0 0 24 24","inner":"<title>QuickBooks</title><path d=\"M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm.642 4.1335c.9554 0 1.7296.776 1.7296 1.7332v9.0667h1.6c1.614 0 2.9275-1.3156 2.9275-2.933 0-1.6173-1.3136-2.9333-2.9276-2.9333h-.6654V7.3334h.6654c2.5722 0 4.6577 2.0897 4.6577 4.667 0 2.5774-2.0855 4.6666-4.6577 4.6666H12.642zM7.9837 7.333h3.3291v12.533c-.9555 0-1.73-.7759-1.73-1.7332V9.0662H7.9837c-1.6146 0-2.9277 1.316-2.9277 2.9334 0 1.6175 1.3131 2.9333 2.9277 2.9333h.6654v1.7332h-.6654c-2.5725 0-4.6577-2.0892-4.6577-4.6665 0-2.5771 2.0852-4.6666 4.6577-4.6666Z\"/>"},"salesforce":{"viewBox":"0 0 24 24","inner":"<title>Salesforce</title><path d=\"M10.006 5.415a4.195 4.195 0 013.045-1.306c1.56 0 2.954.9 3.69 2.205.63-.3 1.35-.45 2.1-.45 2.85 0 5.159 2.34 5.159 5.22s-2.31 5.22-5.176 5.22c-.345 0-.69-.044-1.02-.104a3.75 3.75 0 01-3.3 1.95c-.6 0-1.155-.15-1.65-.375A4.314 4.314 0 018.88 20.4a4.302 4.302 0 01-4.05-2.82c-.27.062-.54.076-.825.076-2.204 0-4.005-1.8-4.005-4.05 0-1.5.811-2.805 2.01-3.51-.255-.57-.39-1.2-.39-1.846 0-2.58 2.1-4.65 4.65-4.65 1.53 0 2.85.705 3.72 1.8\"/>"},"shopify":{"viewBox":"0 0 24 24","inner":"<title>Shopify</title><path d=\"M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192s-1.929-.136-1.929-.136-1.275-1.274-1.439-1.411c-.045-.037-.075-.057-.121-.074l-.914 21.104h.023zM11.71 11.305s-.81-.424-1.774-.424c-1.447 0-1.504.906-1.504 1.141 0 1.232 3.24 1.715 3.24 4.629 0 2.295-1.44 3.76-3.406 3.76-2.354 0-3.54-1.465-3.54-1.465l.646-2.086s1.245 1.066 2.28 1.066c.675 0 .975-.545.975-.932 0-1.619-2.654-1.694-2.654-4.359-.034-2.237 1.571-4.416 4.827-4.416 1.257 0 1.875.361 1.875.361l-.945 2.715-.02.01zM11.17.83c.136 0 .271.038.405.135-.984.465-2.064 1.639-2.508 3.992-.656.213-1.293.405-1.889.578C7.697 3.75 8.951.84 11.17.84V.83zm1.235 2.949v.135c-.754.232-1.583.484-2.394.736.466-1.777 1.333-2.645 2.085-2.971.193.501.309 1.176.309 2.1zm.539-2.234c.694.074 1.141.867 1.429 1.755-.349.114-.735.231-1.158.366v-.252c0-.752-.096-1.371-.271-1.871v.002zm2.992 1.289c-.02 0-.06.021-.078.021s-.289.075-.714.21c-.423-1.233-1.176-2.37-2.508-2.37h-.115C12.135.209 11.669 0 11.265 0 8.159 0 6.675 3.877 6.21 5.846c-1.194.365-2.063.636-2.16.674-.675.213-.694.232-.772.87-.075.462-1.83 14.063-1.83 14.063L15.009 24l.927-21.166z\"/>"},"slack":{"viewBox":"0 0 24 24","inner":"<title>Slack</title><path d=\"M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z\"/>"},"square":{"viewBox":"0 0 24 24","inner":"<title>Square</title><path d=\"M4.01 0A4.01 4.01 0 000 4.01v15.98c0 2.21 1.8 4 4.01 4.01h15.98C22.2 24 24 22.2 24 19.99V4A4.01 4.01 0 0019.99 0H4zm1.62 4.36h12.74c.7 0 1.26.57 1.26 1.27v12.74c0 .7-.56 1.27-1.26 1.27H5.63c-.7 0-1.26-.57-1.26-1.27V5.63a1.27 1.27 0 011.26-1.27zm3.83 4.35a.73.73 0 00-.73.73v5.09c0 .4.32.72.72.72h5.1a.73.73 0 00.73-.72V9.44a.73.73 0 00-.73-.73h-5.1Z\"/>"},"stripe":{"viewBox":"0 0 24 24","inner":"<title>Stripe</title><path d=\"M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z\"/>"},"supabase":{"viewBox":"0 0 24 24","inner":"<title>Supabase</title><path d=\"M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C-.33 13.427.65 15.455 2.409 15.455h9.579l.113 7.51c.014.985 1.259 1.408 1.873.636l9.262-11.653c1.093-1.375.113-3.403-1.645-3.403h-9.642z\"/>"},"twilio":{"viewBox":"0 0 24 24","inner":"<title>Twilio</title><path d=\"M12 0C5.381-.008.008 5.352 0 11.971V12c0 6.64 5.359 12 12 12 6.64 0 12-5.36 12-12 0-6.641-5.36-12-12-12zm0 20.801c-4.846.015-8.786-3.904-8.801-8.75V12c-.014-4.846 3.904-8.786 8.75-8.801H12c4.847-.014 8.786 3.904 8.801 8.75V12c.015 4.847-3.904 8.786-8.75 8.801H12zm5.44-11.76c0 1.359-1.12 2.479-2.481 2.479-1.366-.007-2.472-1.113-2.479-2.479 0-1.361 1.12-2.481 2.479-2.481 1.361 0 2.481 1.12 2.481 2.481zm0 5.919c0 1.36-1.12 2.48-2.481 2.48-1.367-.008-2.473-1.114-2.479-2.48 0-1.359 1.12-2.479 2.479-2.479 1.361-.001 2.481 1.12 2.481 2.479zm-5.919 0c0 1.36-1.12 2.48-2.479 2.48-1.368-.007-2.475-1.113-2.481-2.48 0-1.359 1.12-2.479 2.481-2.479 1.358-.001 2.479 1.12 2.479 2.479zm0-5.919c0 1.359-1.12 2.479-2.479 2.479-1.367-.007-2.475-1.112-2.481-2.479 0-1.361 1.12-2.481 2.481-2.481 1.358 0 2.479 1.12 2.479 2.481z\"/>"},"whatsapp":{"viewBox":"0 0 24 24","inner":"<title>WhatsApp</title><path d=\"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z\"/>"},"zendesk":{"viewBox":"0 0 24 24","inner":"<title>Zendesk</title><path d=\"M12.914 2.904V16.29L24 2.905H12.914zM0 2.906C0 5.966 2.483 8.45 5.543 8.45s5.542-2.484 5.543-5.544H0zm11.086 4.807L0 21.096h11.086V7.713zm7.37 7.84c-3.063 0-5.542 2.48-5.542 5.543H24c0-3.06-2.48-5.543-5.543-5.543z\"/>"}};

    const integrationsSection = document.getElementById('integrations');
    if (!integrationsSection) return;

    const toggleBtn = Array.from(integrationsSection.querySelectorAll('button')).find(btn => 
      btn.textContent.includes('integrations') || btn.textContent.includes('155+')
    );
    if (!toggleBtn) return;

    const btnWrapper = toggleBtn.closest('.mt-12') || toggleBtn.parentElement.parentElement || toggleBtn.parentElement;

    let drawer = document.getElementById('integrations-drawer');
    if (!drawer) {
      drawer = document.createElement('div');
      drawer.id = 'integrations-drawer';
      drawer.style.display = 'none';
      drawer.className = 'pt-8 transition-all duration-300';
      btnWrapper.appendChild(drawer);
    }

    let isOpen = false;
    let selectedIndustryIdx = 0;

    function renderBadge(p) {
      let icon = '';
      if (p.icon && svgs[p.icon]) {
        const bg = p.hex ? '#' + p.hex : '#ffffff';
        icon = '<svg viewBox="' + svgs[p.icon].viewBox + '" class="h-[18px] w-[18px] shrink-0" fill="' + bg + '">' + svgs[p.icon].inner + '</svg>';
      } else if (p.domain) {
        icon = '<img src="images/' + p.domain + '.png" alt="" loading="lazy" class="h-[18px] w-[18px] shrink-0 rounded-[5px] bg-white object-contain p-[2px]">';
      } else {
        icon = '<span class="h-[18px] w-[18px] grid shrink-0 place-items-center rounded-[5px] bg-white/10 text-[9px] font-semibold text-white/70">' + p.name[0] + '</span>';
      }
      return '<span class="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] py-1.5 pl-2 pr-3 text-[13px] text-white/75 transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.07] hover:text-white">' + icon + p.name + '</span>';
    }

    function buildDrawerHtml() {
      // 1. Core 6 categories grid
      let categoriesHtml = '<div class="grid gap-10 md:grid-cols-3 md:gap-x-12 md:gap-y-12">';
      integrationsData.categories.forEach(cat => {
        categoriesHtml += `
          <div>
            <h3 class="text-lg font-medium text-white">${cat.title}</h3>
            <p class="mt-2 text-sm leading-relaxed text-white/50">${cat.blurb}</p>
            <div class="mt-4 flex flex-wrap gap-2">
              ${cat.platforms.map(renderBadge).join('')}
            </div>
          </div>`;
      });
      categoriesHtml += '</div>';

      // 2. Industry Software Card
      const currentIndustry = integrationsData.industries[selectedIndustryIdx] || integrationsData.industries[0];

      let tabsHtml = '';
      integrationsData.industries.forEach((ind, idx) => {
        const isSel = idx === selectedIndustryIdx;
        tabsHtml += `<button data-industry-idx="${idx}" class="industry-tab rounded-full px-3.5 py-1.5 text-[13px] transition ${isSel ? 'bg-teal-300 text-[#07090c] font-medium' : 'bg-white/[0.05] text-white/60 hover:bg-white/10 hover:text-white'}">${ind.title}</button>`;
      });

      const industryCardHtml = `
        <div class="mt-14 rounded-[28px] border border-white/[0.08] bg-[#07090c] p-6 sm:p-8">
          <div class="flex flex-col justify-between gap-2 md:flex-row md:items-end">
            <div>
              <h3 class="text-lg font-medium text-white">Industry software</h3>
              <p class="mt-1.5 text-sm leading-relaxed text-white/45">The system your business actually runs on, from field service to patient records. Pick your industry.</p>
            </div>
          </div>
          <div class="mt-6 flex flex-wrap gap-2" role="tablist">
            ${tabsHtml}
          </div>
          <div id="industry-platforms" class="mt-6 min-h-[96px] border-t border-white/[0.07] pt-6 flex flex-wrap gap-2">
            ${currentIndustry.platforms.map(renderBadge).join('')}
          </div>
        </div>`;

      return categoriesHtml + industryCardHtml;
    }

    function attachIndustryTabEvents() {
      const tabs = drawer.querySelectorAll('button[data-industry-idx]');
      const platformBox = drawer.querySelector('#industry-platforms');
      tabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
          e.preventDefault();
          selectedIndustryIdx = parseInt(this.getAttribute('data-industry-idx'), 10);
          tabs.forEach((t, i) => {
            if (i === selectedIndustryIdx) {
              t.className = "industry-tab rounded-full px-3.5 py-1.5 text-[13px] transition bg-teal-300 text-[#07090c] font-medium";
            } else {
              t.className = "industry-tab rounded-full px-3.5 py-1.5 text-[13px] transition bg-white/[0.05] text-white/60 hover:bg-white/10 hover:text-white";
            }
          });
          const ind = integrationsData.industries[selectedIndustryIdx];
          if (platformBox && ind) {
            platformBox.innerHTML = ind.platforms.map(renderBadge).join('');
          }
        });
      });
    }

    toggleBtn.addEventListener('click', function(e) {
      e.preventDefault();
      isOpen = !isOpen;

      if (isOpen) {
        drawer.innerHTML = buildDrawerHtml();
        drawer.style.display = 'block';
        attachIndustryTabEvents();
        toggleBtn.innerHTML = 'Hide integrations<svg viewBox="0 0 16 16" class="h-3.5 w-3.5 transition-transform duration-300 rotate-180" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke-linecap="round" stroke-linejoin="round"></path></svg>';
        toggleBtn.setAttribute('aria-expanded', 'true');
      } else {
        drawer.style.display = 'none';
        toggleBtn.innerHTML = 'See all 155+ integrations<svg viewBox="0 0 16 16" class="h-3.5 w-3.5 transition-transform duration-300" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke-linecap="round" stroke-linejoin="round"></path></svg>';
        toggleBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Init all
  function initAll() {
    initPlayer();
    initIntegrations();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }
})();
