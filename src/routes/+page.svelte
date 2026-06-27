<script>
import Mail from '@lucide/svelte/icons/mail';
  import MessageCircle from '@lucide/svelte/icons/message-circle';
  import BookOpenText from '@lucide/svelte/icons/book-open-text';
  import HeartPulse from '@lucide/svelte/icons/heart-pulse';
  import Leaf from '@lucide/svelte/icons/leaf';
  import Lightbulb from '@lucide/svelte/icons/lightbulb';
  import FaFacebook from 'svelte-icons/fa/FaFacebook.svelte';
  import FaInstagram from 'svelte-icons/fa/FaInstagram.svelte';
  import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
  import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
  import FaTwitter from 'svelte-icons/fa/FaTwitter.svelte';

  import { onMount } from 'svelte';

  const { data } = $props();

  console.log(data)

  let open = $state(false)
  let scrolled = $state(false)

  onMount(() => {
    const onScroll = () => {
      scrolled = window.scrollY > 50;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  });

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
  <!-- Preload critical hero image so it starts downloading as early as possible -->
  <link rel="preload" as="image" href="/assets/yan-hero.jpg" fetchpriority="high" />
  <!-- Preload the logo as well since it's above the fold -->
  <link rel="preload" as="image" href="/assets/yan-logo.jpg" fetchpriority="high" />
</svelte:head>

<div class="page-wrap">
  <!-- NAVBAR -->
  <nav class="navbar" class:navbar-scrolled={scrolled}>
    <div class="nav-inner">
      <button class="nav-menu-btn" aria-label="Menu" onclick={() => open = !open}>☰</button>
      <a href="#" class="nav-brand">YOUTH ARISE NETWORK</a>
      <div class="nav-links">
        {#each links as l}
          <a href={l.href} class="nav-link">{l.label}</a>
        {/each}
      </div>
      <span class="nav-spacer"></span>
    </div>
    {#if open}
      <div class="nav-mobile">
        {#each links as l}
          <a href={l.href} class="nav-mobile-link" onclick={() => open = false}>{l.label}</a>
        {/each}
      </div>
    {/if}
  </nav>

  <!-- HERO -->
  <header class="hero">
    <div class="hero-desktop">
      <img src="/assets/yan-hero.jpg" alt="YAN volunteers" class="hero-img" fetchpriority="high" />
      <div class="hero-logo-desktop">
        <div class="hero-ring-outer">
          <div class="hero-ring-inner">
            <img src="/assets/yan-logo.jpg" alt="YouthArise! logo" class="hero-logo-img" fetchpriority="high" />
          </div>
        </div>
      </div>
    </div>
    <div class="hero-mobile">
      <div class="hero-bg">
        <img src="/assets/yan-hero.jpg" alt="" class="hero-bg-img" fetchpriority="high" />
        <div class="hero-overlay"></div>
        <div class="hero-blur-overlay"></div>
      </div>
      <div class="hero-content">
        <div class="hero-logo-mobile">
          <div class="hero-ring-outer-sm">
            <div class="hero-ring-inner-sm">
              <img src="/assets/yan-logo.jpg" alt="YouthArise! logo" class="hero-logo-img-sm" fetchpriority="high" />
            </div>
          </div>
        </div>
        <div class="hero-text-block">
          <div class="hero-title">REDUCING INEQUALITY OF<br />OPPORTUNITY</div>
          <div class="hero-title">BY INVESTING IN EDUCATION , HEALTH<br />& CLIMATE RESILIENCE</div>
          <div class="hero-subtitle">become part of the change</div>
        </div>
        <div class="hero-donate-wrap">
          <a href="#donate" class="hero-donate-btn">
            <span>DONATE</span><span>▶</span>
          </a>
        </div>
      </div>
    </div>
    <div class="hero-donate-desktop">
      <a href="#donate" class="hero-donate-btn">
        <span>DONATE</span><span>▶</span>
      </a>
    </div>
  </header>

  <div class="hidden md:block spacer-60"></div>

  <!-- VISION / MISSION / GOAL -->
  <section id="about" class="section-vmg">
    <div class="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
      {#each org_data as item}
        <div class="vmg-card">
          <div class="vmg-label">{item.label}</div>
          <p class="vmg-text">{item.text}</p>
        </div>
      {/each}
    </div>
  </section>

  <!-- WHAT WE DO -->
  <section id="work" class="section-work">
    <div class="max-w-7xl mx-auto">
      <div class="section-heading">WHAT WE DO</div>
      <div class="grid md:grid-cols-3 gap-6">
        {#each data.initiatives as c}
          <article class="work-card">
            <img src={c.image_file} alt={c.name} class="work-card-img" loading="lazy" />
            <div class="work-card-body">
              <h3 class="work-card-title">{c.name}</h3>
              <p class="work-card-desc">{c.description}</p>
              <div class="work-card-actions">
                <a href={c.project_link} class="work-card-link">VIEW PROJECTS <span>›</span></a>
                <a href="/projects" aria-label="Facebook" class="work-card-social">
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
  <section class="section-focus">
    <div class="max-w-7xl mx-auto">
      <div class="section-heading text-center">FOCUS AREAS</div>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {#each [
          { title: 'EDUCATION', icon: BookOpenText, desc: 'Providing access to quality learning opportunities, academic support, digital skills training, and life skills development for marginalized youth.' },
          { title: 'HEALTH', icon: HeartPulse, desc: 'Promoting health and well-being through community health initiatives, nutrition programs, and access to essential healthcare services.' },
          { title: 'CLIMATE RESILIENCE', icon: Leaf, desc: 'Building climate-resilient communities through sustainable agriculture, environmental education, and green livelihood programs.' },
          { title: 'ENTREPRENEURSHIP', icon: Lightbulb, desc: 'Empowering youth with entrepreneurial skills, mentorship, and resources to create sustainable businesses and economic opportunities.' },
        ] as fa}
          <div class="focus-card">
            <div class="focus-icon"><svelte:component this={fa.icon} size="40" strokeWidth={1.5} /></div>
            <h3 class="focus-title">{fa.title}</h3>
            <div class="focus-divider"></div>
            <p class="focus-desc">{fa.desc}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- IMPACT STATS -->
  <section class="section-stats">
    <div class="max-w-7xl mx-auto">
      <div class="md:hidden flex justify-center mb-6">
        <div class="stat-circle">
          <span class="stat-circle-number">30,000 +</span>
          <span class="stat-circle-label">outreach</span>
        </div>
      </div>
      <div class="stats-box">
        <div class="hidden md:grid grid-cols-5 gap-8 items-center text-center">
          <div><div class="stat-number">578</div><div class="stat-label">GIRS REACHED</div></div>
          <div><div class="stat-number">8750 +</div><div class="stat-label">FED UNDER AGRI{"\n"}INITIATIVES</div></div>
          <div class="flex justify-center"><div class="stat-circle"><span class="stat-circle-number">30,000 +</span><span class="stat-circle-label">outreach</span></div></div>
          <div><div class="stat-number">200</div><div class="stat-label">ORPHANADE CHILDREN{"\n"}{"\n"}HELPED</div></div>
          <div><div class="stat-number">38750 +</div><div class="stat-label">CHILDREN ASSISTED IN{"\n"}{"\n"}BACK TO SCHOOL INIAITIVE</div></div>
        </div>
        <div class="md:hidden grid grid-cols-2 gap-y-10 gap-x-4 text-center">
          <div><div class="stat-number">578</div><div class="stat-label">GIRS REACHED</div></div>
          <div><div class="stat-number">8750 +</div><div class="stat-label">FED UNDER AGRI{"\n"}INITIATIVES</div></div>
          <div><div class="stat-number">38750 +</div><div class="stat-label">CHILDREN ASSISTED{"\n"}IN{"\n"}BACK TO SCHOOL{"\n"}INIAITIVE</div></div>
          <div><div class="stat-number">200</div><div class="stat-label">ORPHANADE{"\n"}CHILDREN{"\n"}HELPED</div></div>
        </div>
      </div>

      <div class="projects-box">
        <div class="md:hidden projects-box-heading">OUR PROJECTS</div>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-2 text-center">
          {#each ['BACK TO SCHOOL GIRLS PROJECT', 'FARM TO TABLET - FARMING INITIATIVE', 'ADZIWA - FARM PROJECT', 'NTHANZI LATHU - OUR HANDS PROJECT'] as p}
            <div class="project-name">{p}</div>
          {/each}
        </div>
      </div>
    </div>
  </section>

  <!-- WORK WITH US -->
  <section id="involved" class="section-involved">
    <div class="max-w-7xl mx-auto">
      <div class="section-heading">WORK WITH US</div>
      <div class="grid md:grid-cols-2 gap-6">
        <a href="mailto:info@youtharise.org" class="involved-card">
          <span class="involved-card-text">EMAIL</span>
          <Mail size="26" />
        </a>
        <a href="https://wa.me/" class="involved-card">
          <span class="involved-card-text">WHATSAPP</span>
          <MessageCircle size="26" />
        </a>
      </div>
    </div>
  </section>

  <!-- DONATE / VOLUNTEER -->
  <section id="donate" class="section-donate">
    <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
      <div class="donate-card">
        <div class="donate-card-body">
          <div class="donate-card-label">DONATE & CONTRIBUTE TO OUR CAUSE</div>
          <h3 class="donate-card-title">Nothing is too little</h3>
          <p class="donate-card-desc">You can donate money, food, books, used items, property, etc in the service to humanity and help the most vulnerable</p>
        </div>
        <a href="#" class="donate-card-btn">WHATSAPP FOR INQUIRIES</a>
      </div>
      <div class="volunteer-card">
        <div class="donate-card-body">
          <div class="volunteer-card-label">JOIN THE VOLUNTEER TEAM</div>
          <h3 class="donate-card-title">Get involved</h3>
          <p class="donate-card-desc">There is a variety of ways in which people can support YAN's mission to eliminate hunger, from making a donation to bringing your expertise to our work on the frontlines.</p>
        </div>
        <a href="#" class="volunteer-card-btn">START YOUR APPLICATION</a>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer id="news" class="footer">
    <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
      <div class="footer-brand">
        <div class="footer-logo">
          <img src="/assets/yan-logo.jpg" alt="YouthArise! logo" class="footer-logo-img" loading="lazy" />
        </div>
        <div class="footer-donate-text">DONATE & CONTRIBUTE TO OUR CAUSE</div>
      </div>
      <div class="footer-socials">
        <div class="footer-follow-label">FOLLOW US</div>
        <ul class="footer-social-list">
          {#each socials as s}
            <li class="footer-social-item">
              <span class="footer-social-name">{s.name}</span>
              <a href="#" aria-label={s.name} class="footer-social-link">
                <svelte:component this={s.icon} size="14" />
              </a>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </footer>
</div>
<style>
  .page-wrap { color: #1A1A1A; background: #fff; font-family: Poppins, sans-serif; padding-top: 56px; }
  @media (min-width: 768px) { .page-wrap { padding-top: 60px; } }

  html { scroll-behavior: smooth; }
  .nav-link { position: relative; }
  .nav-link::after {
    content: ''; position: absolute; left: 0; right: 0; bottom: -6px;
    height: 2px; background: #4B0082; transform: scaleX(0);
    transition: transform .2s ease;
  }
  .nav-link:hover::after { transform: scaleX(1); }

  /* Navbar */
  .navbar {
    position: fixed; top: 0; left: 0; right: 0; z-index: 50;
    background: transparent;
    transition: background 0.3s ease, backdrop-filter 0.3s ease, -webkit-backdrop-filter 0.3s ease;
  }
  .navbar-scrolled {
    background: rgba(239, 231, 242, 0.75);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
  }
  @media (min-width: 768px) { .navbar { position: fixed; top: 0; z-index: 50; width: 100%; } }
  .nav-inner { max-width: 1280px; margin: 0 auto; padding: 1rem 1.25rem; display: flex; align-items: center; justify-content: space-between; gap: 1rem; }
  @media (min-width: 768px) { .nav-inner { padding: 1rem 2.5rem; } }
  .nav-menu-btn { display: block; font-size: 1.5rem; color: #4B0082; }
  @media (min-width: 768px) { .nav-menu-btn { display: none; } }
  .nav-brand { font-weight: 800; font-size: 0.75rem; letter-spacing: 0.025em; color: #4B0082; text-decoration: none; }
  @media (min-width: 768px) { .nav-brand { font-size: 0.875rem; } }
  .nav-links { display: none; }
  @media (min-width: 768px) { .nav-links { display: flex; align-items: center; gap: 3rem; margin-left: auto; } }
  .nav-links a { font-size: 0.75rem; font-weight: 700; letter-spacing: 0.05em; color: #1A1A1A; text-decoration: none; }
  .nav-spacer { width: 1.5rem; }
  @media (min-width: 768px) { .nav-spacer { display: none; } }
  .nav-mobile { display: block; background: white; border-top: 1px solid #e5e7eb; padding: 1rem 1.5rem; display: flex; flex-direction: column; gap: 0.75rem; }
  @media (min-width: 768px) { .nav-mobile { display: none; } }
  .nav-mobile-link { font-size: 0.75rem; font-weight: 700; letter-spacing: 0.05em; color: #1A1A1A; text-decoration: none; }

  /* Hero */
  .hero { position: relative; }
  .hero-desktop { display: none; position: relative; }
  @media (min-width: 768px) { .hero-desktop { display: block; } }
  .hero-img { width: 100%; object-fit: cover; height: 420px; }
  .hero-logo-desktop { position: absolute; left: 1.5rem; bottom: -110px; }
  @media (min-width: 1024px) { .hero-logo-desktop { left: 4rem; } }
  .hero-ring-outer { border-radius: 9999px; display: flex; align-items: center; justify-content: center; position: relative; width: 280px; height: 280px; background: #F5C518; animation: pulse-ring 2s ease-in-out infinite; }
  @keyframes pulse-ring {
    0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(245, 197, 24, 0.3); }
    50% { transform: scale(1.08); box-shadow: 0 0 0 30px rgba(245, 197, 24, 0); }
  }
  .hero-ring-inner { border-radius: 9999px; background: white; display: flex; align-items: center; justify-content: center; overflow: hidden; width: 220px; height: 220px; }
  .hero-logo-img { width: 88%; height: 88%; object-fit: contain; }
  .hero-mobile { display: flex; flex-direction: column; align-items: center; padding: 0 1.5rem ; min-height: 100vh; justify-content: center; overflow: hidden; position: relative; }
  @media (min-width: 768px) { .hero-mobile { display: none; } }
  .hero-bg { position: absolute; inset: 0; z-index: 0; }
  .hero-bg-img {
    width: 100%; height: 100%; object-fit: cover;
    /* Show background color immediately while image loads */
    background: #2d4a3e;
  }
  .hero-overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.65); }
  .hero-blur-overlay {
    position: absolute;
    inset: 0;
    z-index: 1;
    background: linear-gradient(to bottom, transparent 0%, transparent 30%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.75) 100%);
    pointer-events: none;
  }
  .hero-content { position: relative; z-index: 10; display: flex; flex-direction: column; align-items: center; margin-top: 4rem; }
  .hero-logo-mobile { display: flex; }
  .hero-ring-outer-sm { border-radius: 9999px; display: flex; align-items: center; justify-content: center; position: relative; width: 340px; height: 340px; background: #F5C518; animation: pulse-ring-sm 2s ease-in-out infinite; }
  @keyframes pulse-ring-sm {
    0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(245, 197, 24, 0.3); }
    50% { transform: scale(1.08); box-shadow: 0 0 0 30px rgba(245, 197, 24, 0); }
  }
  .hero-ring-inner-sm { border-radius: 9999px; background: white; display: flex; align-items: center; justify-content: center; overflow: hidden; width: 220px; height: 220px; }
  .hero-logo-img-sm { width: 88%; height: 88%; object-fit: contain; }
  .hero-text-block { margin-top: 2.5rem; align-self: flex-start; border-left: 2px solid white; padding-left: 0.75rem; }
  .hero-title {font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 1.4rem; font-weight: 900; letter-spacing: 0.5px; color: white; text-shadow: 0 1px 3px rgba(0,0,0,0.3); }
  .hero-subtitle { font-size: 0.75rem; margin-top: 0.75rem; font-weight: 600; letter-spacing: 0.05em; color: #e5e7eb; text-shadow: 0 1px 3px rgba(0,0,0,0.3); }
  .hero-donate-wrap { margin-top: 1.5rem; width: 100%; }
  .hero-donate-btn { display: inline-flex; align-items: center; justify-content: space-between; gap: 0.75rem; padding: 1rem 1.75rem; font-weight: 700; color: white; font-size: 0.875rem; background: #4B0082; min-width: 240px; text-decoration: none; }
  .hero-donate-desktop { display: none; }
  @media (min-width: 768px) { .hero-donate-desktop { display: flex; justify-content: flex-end; max-width: 1280px; margin: 0 auto; padding: 0 2.5rem; margin-top: 2.5rem; } }

  /* Spacer */
  .spacer-60 { height: 60px; }

  /* Vision / Mission / Goal */
  .section-vmg { padding: 3rem 1.25rem; background: #EFE7F2; }
  @media (min-width: 768px) { .section-vmg { padding: 5rem 2.5rem; } }
  .vmg-card { background: white; padding: 1.75rem 1.5rem; display: flex; flex-direction: column; align-items: center; text-align: center; border-bottom: 1px solid #4B0082; }
  .vmg-label { font-size: 0.75rem; font-weight: 700; margin-bottom: 0.75rem; color: #4B0082; letter-spacing: 2px; }
  .vmg-text { font-size: 11px; line-height: 1.625; color: #1f2937; margin-bottom: 1.25rem; }

  /* What We Do */
  .section-work { padding: 3rem 1.25rem; background: white; }
  @media (min-width: 768px) { .section-work { padding: 4rem 2.5rem; } }
  .section-heading { font-size: 11px; font-weight: 700; margin-bottom: 2rem; letter-spacing: 2px; }
  .text-center { text-align: center; }
  .work-card { display: flex; flex-direction: column; }
  .work-card-img { width: 100%; object-fit: cover; height: 280px; }
  .work-card-body { padding-top: 1rem; display: flex; flex-direction: column; flex: 1; }
  .work-card-title { font-weight: 700; font-size: 0.875rem; margin-bottom: 0.5rem; }
  .work-card-desc { font-size: 11px; line-height: 1.625; color: #374151; flex: 1; }
  .work-card-actions { margin-top: 1rem; display: flex; align-items: center; justify-content: space-between; gap: 0.75rem; }
  .work-card-link { display: inline-flex; align-items: center; gap: 0.75rem; border: 1px solid #9ca3af; padding: 0.5rem 1rem; font-size: 10px; font-weight: 700; letter-spacing: 0.05em; color: #1A1A1A; text-decoration: none; }
  .work-card-link:hover { background: #f9fafb; }
  .work-card-social { width: 1.75rem; height: 1.75rem; display: flex; align-items: center; justify-content: center; color: black; }

  /* Focus Areas */
  .section-focus { padding: 3rem 1.25rem; background: linear-gradient(90deg, #EFE7F2 0%, #FAF6E7 100%); }
  @media (min-width: 768px) { .section-focus { padding: 4rem 2.5rem; } }
  .focus-card { background: white; border-radius: 0.5rem; padding: 2.5rem 2rem; display: flex; flex-direction: column; align-items: center; text-align: center; box-shadow: 0 1px 2px rgba(0,0,0,0.05); transition: box-shadow .2s; }
  .focus-card:hover { box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
  .focus-icon { margin-bottom: 1.25rem; color: #4B0082; }
  .focus-title { font-weight: 700; font-size: 0.875rem; margin-bottom: 1rem; color: #4B0082; letter-spacing: 1.5px; }
  .focus-divider { height: 2px; width: 2.5rem; margin-bottom: 1rem; background: #F5C518; }
  .focus-desc { font-size: 11px; line-height: 1.625; color: #374151; }

  /* Impact Stats */
  .section-stats { padding: 3rem 1.25rem; background: white; }
  @media (min-width: 768px) { .section-stats { padding: 4rem 2.5rem; } }
  .stat-circle { border-radius: 9999px; display: flex; flex-direction: column; align-items: center; justify-content: center; color: white; background: #CC0000; width: 170px; height: 170px; }
  .stat-circle-number { font-weight: 800; font-size: 1.5rem; }
  @media (min-width: 768px) { .stat-circle-number { font-size: 1.875rem; } }
  .stat-circle-label { font-size: 0.75rem; margin-top: 0.25rem; }
  .stats-box { padding: 2.5rem 1.25rem; border: 1px solid #4B0082; border-radius: 1px; background: linear-gradient(90deg, #EFE7F2 0%, #FBF3E0 100%); }
  @media (min-width: 768px) { .stats-box { padding: 3.5rem 3rem; } }
  .stat-number { font-weight: 800; line-height: 1; font-size: 1.875rem; }
  @media (min-width: 768px) { .stat-number { font-size: 2.25rem; } }
  .stat-label { font-size: 10px; margin-top: 0.75rem; font-weight: 700; letter-spacing: 0.05em; white-space: pre-line; line-height: 1.625; }
  .projects-box { margin-top: 1.5rem; padding: 2rem 1.25rem; border: 1px solid #4B0082; border-radius: 1px; }
  @media (min-width: 768px) { .projects-box { padding: 2rem 3rem; } }
  .projects-box-heading { font-size: 11px; font-weight: 700; margin-bottom: 1rem; letter-spacing: 0.05em; }
  .project-name { font-size: 11px; font-weight: 700; letter-spacing: 0.05em; white-space: pre-line; line-height: 1.625; }

  /* Work With Us */
  .section-involved { padding: 3rem 1.25rem; background: white; }
  @media (min-width: 768px) { .section-involved { padding: 4rem 2.5rem; } }
  .involved-card { display: flex; align-items: center; justify-content: space-between; border: 1px solid #d1d5db; padding: 1rem 1.5rem; background: white; text-decoration: none; color: #1A1A1A; transition: background .15s; box-shadow: 0 1px 2px rgba(0,0,0,0.05); }
  .involved-card:hover { background: #f9fafb; }
  .involved-card-text { font-weight: 700; font-size: 0.875rem; letter-spacing: 0.05em; margin: 0 auto; }
  @media (min-width: 768px) { .involved-card-text { margin-left: 8rem; } }

  /* Donate / Volunteer */
  .section-donate { padding: 0 1.25rem 3rem; background: white; }
  @media (min-width: 768px) { .section-donate { padding: 0 2.5rem 4rem; } }
  .donate-card { display: flex; flex-direction: column; background: #4B0082; color: white; }
  .donate-card-body { padding: 2rem; flex: 1; display: flex; flex-direction: column; align-items: center; text-align: center; }
  @media (min-width: 768px) { .donate-card-body { padding: 2.5rem; } }
  .donate-card-label { font-size: 11px; font-weight: 700; margin-bottom: 1.5rem; letter-spacing: 0.05em; color: #F5C518; }
  .donate-card-title { font-size: 1.25rem; font-weight: 700; margin-bottom: 1.25rem; }
  @media (min-width: 768px) { .donate-card-title { font-size: 1.5rem; } }
  .donate-card-desc { font-size: 0.75rem; line-height: 1.625; max-width: 24rem; }
  @media (min-width: 768px) { .donate-card-desc { font-size: 0.875rem; } }
  .donate-card-btn { display: block; width: 100%; text-align: center; background: white; padding: 1rem; font-weight: 700; font-size: 0.75rem; letter-spacing: 0.05em; color: #1A1A1A; text-decoration: none; }
  .donate-card-btn:hover { background: #f3f4f6; }
  .volunteer-card { display: flex; flex-direction: column; background: #F5C518; color: #1A1A1A; }
  .volunteer-card-label { font-size: 11px; font-weight: 700; margin-bottom: 1.5rem; letter-spacing: 0.05em; }
  .volunteer-card-btn { display: block; width: 100%; text-align: center; padding: 1rem; font-weight: 700; font-size: 0.75rem; letter-spacing: 0.05em; color: #1A1A1A; text-decoration: none; background: #F5C518; border-top: 1px solid #4B0082; }
  .volunteer-card-btn:hover { opacity: 0.9; }

  /* Footer */
  .footer { padding: 3rem 1.25rem; background: linear-gradient(90deg, #EFE7F2 0%, #FAF6E7 100%); }
  @media (min-width: 768px) { .footer { padding: 4rem 2.5rem; } }
  .footer-brand { display: flex; flex-direction: column; align-items: center; gap: 1rem; }
  @media (min-width: 768px) { .footer-brand { align-items: flex-start; } }
  .footer-logo { border-radius: 9999px; background: white; display: flex; align-items: center; justify-content: center; overflow: hidden; width: 200px; height: 200px; }
  .footer-logo-img { width: 88%; height: 88%; object-fit: contain; }
  .footer-donate-text { font-size: 11px; font-weight: 700; letter-spacing: 0.05em; margin-top: 0.5rem; color: #4B0082; }
  .footer-socials { display: flex; flex-direction: column; }
  @media (min-width: 768px) { .footer-socials { align-items: flex-end; } }
  .footer-follow-label { font-weight: 700; font-size: 0.75rem; margin-bottom: 1.5rem; color: #777; }
  @media (min-width: 768px) { .footer-follow-label { align-self: flex-end; } }
  .footer-social-list { list-style: none; padding: 0; margin: 0; width: 100%; display: flex; flex-direction: column; gap: 1rem; }
  @media (min-width: 768px) { .footer-social-list { width: 16rem; } }
  .footer-social-item { display: flex; align-items: center; justify-content: space-between; }
  .footer-social-name { font-size: 0.75rem; color: #888; }
  .footer-social-link { color: #888; width: 16px; }
  .footer-social-link:hover { opacity: 0.6; }
</style>