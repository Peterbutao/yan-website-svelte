<script>
import Mail from '@lucide/svelte/icons/mail';
  import MessageCircle from '@lucide/svelte/icons/message-circle';
  import FaFacebook from 'svelte-icons/fa/FaFacebook.svelte';
  import FaInstagram from 'svelte-icons/fa/FaInstagram.svelte';
  import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
  import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
  import FaTwitter from 'svelte-icons/fa/FaTwitter.svelte';

  const { data } = $props();

  console.log(data)

  let open = $state(false)

  const PURPLE = '#4B0082'
  const GOLD = '#F5C518'
  const LAVENDER = '#EFE7F2'
  const CREAM = '#FBF3E0'
  const RED = '#CC0000'
  const BEIGE = '#FAF6E7'

  const links = [
    { label: 'ABOUT US', href: '#about' },
    { label: 'OUR WORK', href: '#work' },
    { label: 'GET INVOLVED', href: '#involved' },
    { label: 'NEWS', href: '#news' },
  ]

  const org_data = [
    {
      label: 'OUR VISION',
      text: 'To become a network which empowers all youth and women to take a step towards building their dreams, encouraging them to be self-starters, self-reliant and self-sustaining individuals capable of creating thriving careers and businesses.'
    },
    {
      label: 'OUR MISSION',
      text: 'We aim to eradicate poverty and reduce inequality of opportunity by investing in education, entrepreneurship, health and climate resilience.'
    },
    {
      label: 'OUR GOAL',
      text: 'Empower youth and women'
    }
  ]

  const projects = [
    {
      title: 'VOLUNTEERISM & COMMUNITY ENGAGEMENT',
      body: 'we foster empathy, teamwork, and a commitment to building inclusive and resilient communities',
      img: '/assets/yan-volunteerism.jpg',
    },
    {
      title: 'EDUCATION FOR EMPOERMENT',
      body: 'We provide access to quality learning opportunities for marginalized youth, including academic support, digital skills training, and life skills development',
      img: '/assets/yan-education.jpg',
    },
    {
      title: 'CLIMATE RESILIANCE',
      body: 'We provide access to quality learning opportunities for marginalized youth, including academic support, digital skills training, and life skills development',
      img: '/assets/yan-climate.jpg',
    },
  ]

  const socials = [
    { name: 'twitter', icon: FaTwitter },
    { name: 'facebook', icon: FaFacebook },
    { name: 'instagram', icon: FaInstagram },
    { name: 'linkedin', icon: FaLinkedin },
    { name: 'github', icon: FaGithub },
  ]
</script>

<svelte:head>
  <title>Youth Arise Network | Reducing Inequality of Opportunity</title>
  <meta name="description" content="Youth Arise Network (YAN) invests in education, health and climate resilience to reduce inequality of opportunity for marginalized youth in Malawi." />
</svelte:head>

<div style="color: #1A1A1A; background: #fff; font-family: Poppins, sans-serif;">
  <style>
    html { scroll-behavior: smooth; }
    .nav-link { position: relative; }
    .nav-link::after {
      content: ''; position: absolute; left: 0; right: 0; bottom: -6px;
      height: 2px; background: #4B0082; transform: scaleX(0);
      transition: transform .2s ease;
    }
    .nav-link:hover::after { transform: scaleX(1); }
  </style>

  <!-- NAVBAR -->
  <nav class="sticky top-0 z-50 w-full" style="background: linear-gradient(90deg, #EFE7F2 0%, #FBF3E0 100%);">
    <div class="max-w-7xl mx-auto px-5 md:px-10 py-4 flex items-center justify-between gap-4">
      <button class="md:hidden text-2xl" aria-label="Menu" onclick={() => open = !open} style="color: #4B0082;">☰</button>
      <a href="#" class="font-extrabold text-xs md:text-sm tracking-wide" style="color: #4B0082;">YOUTH ARISE NETWORK</a>
      <div class="hidden md:flex items-center gap-12 ml-auto">
        {#each links as l}
          <a href={l.href} class="nav-link text-xs font-bold tracking-wider" style="color: #1A1A1A;">{l.label}</a>
        {/each}
      </div>
      <span class="md:hidden w-6"></span>
    </div>
    {#if open}
      <div class="md:hidden bg-white border-t px-6 py-4 flex flex-col gap-3">
        {#each links as l}
          <a href={l.href} onclick={() => open = false} class="text-xs font-bold tracking-wider">{l.label}</a>
        {/each}
      </div>
    {/if}
  </nav>

  <!-- HERO -->
  <header class="relative">
    <div class="hidden md:block relative">
      <img src="/assets/yan-hero.jpg" alt="YAN volunteers" class="w-full object-cover" style="height: 420px;" />
      <div class="absolute left-6 lg:left-16" style="bottom: -110px;">
        <div class="rounded-full flex items-center justify-center relative" style="width: 280px; height: 280px; background: #F5C518;">
          <div class="rounded-full bg-white flex items-center justify-center overflow-hidden" style="width: 220px; height: 220px;">
            <img src="/assets/yan-logo.jpg" alt="YouthArise! logo" class="w-[88%] h-[88%] object-contain" />
          </div>

        </div>
      </div>
    </div>
    <div class="md:hidden flex flex-col items-center pt-10 pb-2 px-6">
      <div class="rounded-full flex items-center justify-center relative" style="width: 240px; height: 240px; background: #F5C518;">
        <div class="rounded-full bg-white flex items-center justify-center overflow-hidden" style="width: 190px; height: 190px;">
          <img src="/assets/yan-logo.jpg" alt="YouthArise! logo" class="w-[88%] h-[88%] object-contain" />
        </div>

      </div>
      <div class="mt-10 self-start">
        <div class="text-sm font-bold tracking-wider" style="letter-spacing: 1.5px;">REDUCING INEQUALITY OF<br />OPPORTUNITY</div>
        <div class="text-xs mt-3 font-semibold tracking-wider text-gray-700">BY INVESTING IN EDUCATION , HEALTH<br />& CLIMATE RESILIENCE</div>
      </div>
      <div class="mt-6 w-full">
        <a href="#donate" class="inline-flex items-center justify-between gap-3 px-7 py-4 font-bold text-white text-sm w-full" style="background: #4B0082; min-width: 240px;">
          <span class="tracking-wider">DONATE</span><span>▶</span>
        </a>
      </div>
    </div>
    <div class="hidden md:flex justify-end max-w-7xl mx-auto px-10 mt-10">
      <a href="#donate" class="inline-flex items-center justify-between gap-3 px-7 py-4 font-bold text-white text-sm" style="background: #4B0082; min-width: 240px;">
        <span class="tracking-wider">DONATE</span><span>▶</span>
      </a>
    </div>
  </header>

  <div class="hidden md:block" style="height: 60px;"></div>

  <!-- VISION / MISSION / GOAL -->
  <section id="about" class="py-12 md:py-20 px-5 md:px-10 mt-8 md:mt-4" style="background: #EFE7F2;">
    <div class="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
      {#each org_data as item}
        <div class="bg-white px-6 py-7 flex flex-col items-center text-center" style="border-bottom: solid 1px #4b0082;">
          <div class="text-xs font-bold mb-3" style="color: #4B0082; letter-spacing: 2px;">{item.label}</div>
          <p class="text-[11px] leading-relaxed text-gray-800 mb-5">{item.text}</p>
          <!-- <div class="h-[2px] w-full" style="background: #4B0082;"></div> -->
        </div>
      {/each}
    </div>
  </section>

  <!-- WHAT WE DO -->
  <section id="work" class="py-12 md:py-16 px-5 md:px-10 bg-white">
    <div class="max-w-7xl mx-auto">
      <div class="text-[11px] font-bold mb-8" style="letter-spacing: 2px;">WHAT WE DO</div>
      <div class="grid md:grid-cols-3 gap-6">
        {#each data.initiatives as c}
          <article class="flex flex-col">
            <img src={c.image_file} alt={c.name} class="w-full object-cover" style="height: 280px;" />
            <div class="pt-4 flex flex-col flex-1">
              <h3 class="font-bold text-sm mb-2">{c.name}</h3>
              <p class="text-[11px] leading-relaxed text-gray-700 flex-1">{c.description}</p>
              <div class="mt-4 flex items-center justify-between gap-3">
                <a href={c.project_link} class="inline-flex items-center gap-3 border border-gray-400 px-4 py-2 text-[10px] font-bold tracking-wider hover:bg-gray-50">VIEW PROJECTS <span>›</span></a>
                <a href="/projects" aria-label="Facebook" class="w-7 h-7 flex items-center justify-center text-black">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12z" /></svg>
                </a>
              </div>
            </div>
          </article>
        {/each}
      </div>
    </div>
  </section>

  <!-- FOCUS AREAS -->
  <section class="py-12 md:py-16 px-5 md:px-10" style="background: linear-gradient(90deg, #EFE7F2 0%, #FAF6E7 100%);">
    <div class="max-w-7xl mx-auto">
      <div class="text-[11px] font-bold mb-10 text-center" style="letter-spacing: 2px;">FOCUS AREAS</div>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {#each [
          { title: 'EDUCATION', icon: '📚', desc: 'Providing access to quality learning opportunities, academic support, digital skills training, and life skills development for marginalized youth.' },
          { title: 'HEALTH', icon: '🏥', desc: 'Promoting health and well-being through community health initiatives, nutrition programs, and access to essential healthcare services.' },
          { title: 'CLIMATE RESILIENCE', icon: '🌱', desc: 'Building climate-resilient communities through sustainable agriculture, environmental education, and green livelihood programs.' },
          { title: 'ENTREPRENEURSHIP', icon: '💡', desc: 'Empowering youth with entrepreneurial skills, mentorship, and resources to create sustainable businesses and economic opportunities.' },
        ] as fa}
          <div class="bg-white rounded-lg px-8 py-10 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
            <div class="text-4xl mb-5">{fa.icon}</div>
            <h3 class="font-bold text-sm mb-4" style="color: #4B0082; letter-spacing: 1.5px;">{fa.title}</h3>
            <div class="h-[2px] w-10 mb-4" style="background: #F5C518;"></div>
            <p class="text-[11px] leading-relaxed text-gray-700">{fa.desc}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- IMPACT STATS -->
  <section class="py-12 md:py-16 px-5 md:px-10 bg-white">
    <div class="max-w-7xl mx-auto">
      <div class="md:hidden flex justify-center mb-6">
        <div class="rounded-full flex flex-col items-center justify-center text-white" style="background: #CC0000; width: 170px; height: 170px;">
          <span class="font-extrabold text-2xl md:text-3xl">30,000 +</span>
          <span class="text-xs mt-1">outreach</span>
        </div>
      </div>
      <div class="px-5 md:px-12 py-10 md:py-14 border" style="border-color: #4B0082; border-radius: 1px; background: linear-gradient(90deg, #EFE7F2 0%, #FBF3E0 100%);">
        <div class="hidden md:grid grid-cols-5 gap-8 items-center text-center">
          <div><div class="font-extrabold leading-none text-3xl md:text-4xl">578</div><div class="text-[10px] mt-3 font-bold tracking-wider whitespace-pre-line leading-relaxed">GIRS REACHED</div></div>
          <div><div class="font-extrabold leading-none text-3xl md:text-4xl">8750 +</div><div class="text-[10px] mt-3 font-bold tracking-wider whitespace-pre-line leading-relaxed">FED UNDER AGRI{"\n"}INITIATIVES</div></div>
          <div class="flex justify-center"><div class="rounded-full flex flex-col items-center justify-center text-white" style="background: #CC0000; width: 170px; height: 170px;"><span class="font-extrabold text-2xl md:text-3xl">30,000 +</span><span class="text-xs mt-1">outreach</span></div></div>
          <div><div class="font-extrabold leading-none text-3xl md:text-4xl">200</div><div class="text-[10px] mt-3 font-bold tracking-wider whitespace-pre-line leading-relaxed">ORPHANADE CHILDREN{"\n"}{"\n"}HELPED</div></div>
          <div><div class="font-extrabold leading-none text-3xl md:text-4xl">38750 +</div><div class="text-[10px] mt-3 font-bold tracking-wider whitespace-pre-line leading-relaxed">CHILDREN ASSISTED IN{"\n"}{"\n"}BACK TO SCHOOL INIAITIVE</div></div>
        </div>
        <div class="md:hidden grid grid-cols-2 gap-y-10 gap-x-4 text-center">
          <div><div class="font-extrabold leading-none text-3xl">578</div><div class="text-[10px] mt-3 font-bold tracking-wider whitespace-pre-line leading-relaxed">GIRS REACHED</div></div>
          <div><div class="font-extrabold leading-none text-3xl">8750 +</div><div class="text-[10px] mt-3 font-bold tracking-wider whitespace-pre-line leading-relaxed">FED UNDER AGRI{"\n"}INITIATIVES</div></div>
          <div><div class="font-extrabold leading-none text-3xl">38750 +</div><div class="text-[10px] mt-3 font-bold tracking-wider whitespace-pre-line leading-relaxed">CHILDREN ASSISTED{"\n"}IN{"\n"}BACK TO SCHOOL{"\n"}INIAITIVE</div></div>
          <div><div class="font-extrabold leading-none text-3xl">200</div><div class="text-[10px] mt-3 font-bold tracking-wider whitespace-pre-line leading-relaxed">ORPHANADE{"\n"}CHILDREN{"\n"}HELPED</div></div>
        </div>
      </div>

      <div class="mt-6 px-5 md:px-12 py-8 border" style="border-color: #4B0082; border-radius: 1px;">
        <div class="md:hidden text-[11px] font-bold mb-4 tracking-wider">OUR PROJECTS</div>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-2 text-center">
          {#each ['BACK TO SCHOOL{"\n"}GRISL PROJECT', 'FARM TO TABLET{"\n"}FARMING INITIATIVE', 'ADZIWA{"\n"}FARM PROJECT', 'NTHANZI LATHU{"\n"}OUR HANDS PROJECT'] as p}
            <div class="text-[11px] font-bold tracking-wider whitespace-pre-line leading-relaxed">{p}</div>
          {/each}
        </div>
      </div>
    </div>
  </section>

  <!-- WORK WITH US -->
  <section id="involved" class="py-12 md:py-16 px-5 md:px-10 bg-white">
    <div class="max-w-7xl mx-auto">
      <div class="text-[11px] font-bold mb-6 tracking-wider">WORK WITH US</div>
      <div class="grid md:grid-cols-2 gap-6">
        <a href="mailto:info@youtharise.org" class="flex items-center justify-between border border-gray-300 px-6 py-4 bg-white hover:bg-gray-50 transition shadow-sm">
          <span class="font-bold text-sm tracking-wider mx-auto md:mx-0 md:ml-32">EMAIL</span>
          <Mail size="26" />
        </a>
        <a href="https://wa.me/" class="flex items-center justify-between border border-gray-300 px-6 py-4 bg-white hover:bg-gray-50 transition shadow-sm">
          <span class="font-bold text-sm tracking-wider mx-auto md:mx-0 md:ml-32">WHATSAPP</span>
          <MessageCircle size="26" />
        </a>
      </div>
    </div>
  </section>

  <!-- DONATE / VOLUNTEER -->
  <section id="donate" class="px-5 md:px-10 pb-12 md:pb-16 bg-white">
    <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
      <div class="flex flex-col" style="background: #4B0082; color: #fff;">
        <div class="p-8 md:p-10 flex-1 flex flex-col items-center text-center">
          <div class="text-[11px] font-bold mb-6 tracking-wider" style="color: #F5C518;">DONATE & CONTRIBUTE TO OUR CAUSE</div>
          <h3 class="text-xl md:text-2xl font-bold mb-5">Nothing is too little</h3>
          <p class="text-xs md:text-sm leading-relaxed max-w-sm">You can donate money, food, books, used items, property, etc in the service to humanity and help the most vulnerable</p>
        </div>
        <a href="#" class="block w-full text-center bg-white py-4 font-bold text-xs tracking-wider hover:bg-gray-100" style="color: #1A1A1A;">WHATSAPP FOR INQUIRIES</a>
      </div>
      <div class="flex flex-col" style="background: #F5C518; color: #1A1A1A;">
        <div class="p-8 md:p-10 flex-1 flex flex-col items-center text-center">
          <div class="text-[11px] font-bold mb-6 tracking-wider">JOIN THE VOLUNTEER TEAM</div>
          <h3 class="text-base md:text-lg font-bold mb-3">Get involved</h3>
          <p class="text-xs md:text-sm leading-relaxed max-w-sm">There is a variety of ways in which people can support YAN's mission to eliminate hunger, from making a donation to bringing your expertise to our work on the frontlines.</p>
        </div>
        <a href="#" class="block w-full text-center py-4 font-bold text-xs tracking-wider hover:opacity-90" style="background: #F5C518; color: #1A1A1A; border-top: 1px solid #4B0082;">START YOUR APPLICATION</a>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer id="news" class="py-12 md:py-16 px-5 md:px-10" style="background: linear-gradient(90deg, #EFE7F2 0%, #FAF6E7 100%);">
    <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
      <div class="flex flex-col items-center md:items-start gap-4">
        <div class="rounded-full bg-white flex items-center justify-center overflow-hidden" style="width: 200px; height: 200px;">
          <img src="/assets/yan-logo.jpg" alt="YouthArise! logo" class="w-[88%] h-[88%] object-contain" />
        </div>
        <div class="text-[11px] font-bold tracking-wider mt-2" style="color: #4B0082;">DONATE & CONTRIBUTE TO OUR CAUSE</div>
      </div>
      <div class="flex flex-col md:items-end">
        <div class="font-bold text-xs mb-6 md:self-end" style="color: #777;">FOLLOW US</div>
        <ul class="space-y-4 w-full md:w-64">
          {#each socials as s}
            <li class="flex items-center justify-between">
              <span class="text-xs" style="color: #888;">{s.name}</span>
              <a href="#" aria-label={s.name} style="color: #888; width:16px;" class="hover:opacity-60">
                <svelte:component this={s.icon} size="14" />
              </a>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </footer>
</div>