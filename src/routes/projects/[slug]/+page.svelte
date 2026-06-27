<script>
  import { onMount } from 'svelte';

  const { data } = $props();

  let initiative = $state(data.initiative);

  // Default placeholder if initiative not found
  if (!initiative) {
    initiative = {
      name: 'Project Not Found',
      description: 'The requested project could not be found.',
      image_file: '',
      category: '',
      status: '',
      location: '',
      years_active: [],
      partners: [],
      activities: [],
      reach: {},
      companion_resource: '',
      manual_objectives: []
    };
  }

  let scrolled = $state(false);

  onMount(() => {
    const onScroll = () => {
      scrolled = window.scrollY > 50;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  });

  const links = [
    { label: 'ABOUT US', href: '/#about' },
    { label: 'OUR WORK', href: '/#work' },
    { label: 'GET INVOLVED', href: '/#involved' },
    { label: 'NEWS', href: '/#news' },
  ];
</script>

<svelte:head>
  <title>{initiative.name} | Youth Arise Network</title>
  <meta name="description" content={initiative.description} />
</svelte:head>

<div class="page">
  <!-- NAVBAR -->
  <nav class="navbar" class:navbar-scrolled={scrolled}>
    <div class="nav-inner">
      <button class="nav-menu-btn" aria-label="Menu">☰</button>
      <a href="/" class="nav-brand">YOUTH ARISE NETWORK</a>
      <div class="nav-links">
        {#each links as l}
          <a href={l.href} class="nav-link">{l.label}</a>
        {/each}
      </div>
      <span class="nav-spacer"></span>
    </div>
  </nav>

  <!-- BACK LINK -->
  <div class="back-bar">
    <a href="/#work" class="back-link">← BACK TO PROJECTS</a>
  </div>

  <!-- PROJECT DETAIL -->
  <article class="detail">
    <div class="detail-container">
      {#if initiative.image_file}
        <div class="detail-image-wrap">
          <img src={initiative.image_file} alt={initiative.name} class="detail-image" />
        </div>
      {/if}

      <div class="detail-content">
        <span class="detail-category">{initiative.category}</span>
        <h1 class="detail-title">{initiative.name}</h1>
        <p class="detail-desc">{initiative.description}</p>

        {#if initiative.status}
          <div class="detail-meta">
            <span class="meta-label">Status</span>
            <span class="meta-value">{initiative.status}</span>
          </div>
        {/if}

        {#if initiative.location}
          <div class="detail-meta">
            <span class="meta-label">Location</span>
            <span class="meta-value">{initiative.location}</span>
          </div>
        {/if}

        {#if initiative.years_active.length}
          <div class="detail-meta">
            <span class="meta-label">Active Years</span>
            <span class="meta-value">{initiative.years_active.join(', ')}</span>
          </div>
        {/if}

        {#if initiative.partners.length}
          <div class="detail-section">
            <h2 class="detail-section-title">Partners</h2>
            <ul class="detail-list">
              {#each initiative.partners as partner}
                <li class="detail-list-item">{partner}</li>
              {/each}
            </ul>
          </div>
        {/if}

        {#if initiative.activities.length}
          <div class="detail-section">
            <h2 class="detail-section-title">Key Activities</h2>
            <ul class="detail-list">
              {#each initiative.activities as activity}
                <li class="detail-list-item">{activity}</li>
              {/each}
            </ul>
          </div>
        {/if}

        {#if initiative.companion_resource}
          <div class="detail-box">
            <h3 class="detail-box-title">{initiative.companion_resource}</h3>
            {#if initiative.manual_objectives.length}
              <p class="detail-box-sub">Designed to help participants:</p>
              <ul class="detail-list">
                {#each initiative.manual_objectives as obj}
                  <li class="detail-list-item">{obj}</li>
                {/each}
              </ul>
            {/if}
          </div>
        {/if}

        {#if initiative.reach.youth_reached}
          <div class="detail-reach">
            <span class="reach-number">{initiative.reach.youth_reached}</span>
            <span class="reach-label">Youth Reached</span>
          </div>
        {/if}

        {#if initiative.reach.books_donated}
          <div class="detail-reach">
            <span class="reach-number">{initiative.reach.books_donated}</span>
            <span class="reach-label">Books Donated</span>
          </div>
        {/if}
      </div>
    </div>
  </article>

  <!-- FOOTER -->
  <footer class="footer">
    <div class="max-w-7xl mx-auto">
      <a href="/" class="footer-home-link">← Back to Home</a>
    </div>
  </footer>
</div>

<style>
  .page { color: #1A1A1A; background: #fff; font-family: Poppins, sans-serif; }
  @media (min-width: 768px) { .page { padding-top: 60px; } }

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

  /* Back bar */
  .back-bar { background: #EFE7F2; padding: 1rem 1.25rem; }
  @media (min-width: 768px) { .back-bar { padding: 1rem 2.5rem; } }
  .back-link { font-size: 0.75rem; font-weight: 700; letter-spacing: 0.05em; color: #4B0082; text-decoration: none; }
  .back-link:hover { text-decoration: underline; }

  /* Detail */
  .detail { padding: 2rem 1.25rem 4rem; }
  @media (min-width: 768px) { .detail { padding: 3rem 2.5rem 5rem; } }
  .detail-container { max-width: 48rem; margin: 0 auto; }

  .detail-image-wrap { margin-bottom: 2rem; }
  .detail-image { width: 100%; object-fit: cover; border-radius: 0.5rem; max-height: 400px; }

  .detail-content { display: flex; flex-direction: column; gap: 1rem; }
  .detail-category { display: inline-block; font-size: 10px; font-weight: 700; letter-spacing: 2px; color: #4B0082; text-transform: uppercase; }
  .detail-title { font-size: 1.75rem; font-weight: 800; line-height: 1.2; color: #1A1A1A; margin: 0; }
  @media (min-width: 768px) { .detail-title { font-size: 2.25rem; } }
  .detail-desc { font-size: 0.875rem; line-height: 1.7; color: #374151; }

  .detail-meta { display: flex; gap: 0.75rem; }
  .meta-label { font-size: 0.75rem; font-weight: 700; letter-spacing: 0.05em; color: #9ca3af; min-width: 7rem; }
  .meta-value { font-size: 0.75rem; color: #1A1A1A; }

  .detail-section { margin-top: 0.5rem; }
  .detail-section-title { font-size: 1rem; font-weight: 700; color: #4B0082; margin: 0 0 0.5rem; }
  .detail-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.5rem; }
  .detail-list-item { font-size: 0.875rem; line-height: 1.6; color: #374151; padding-left: 1rem; position: relative; }
  .detail-list-item::before { content: '•'; position: absolute; left: 0; color: #F5C518; font-weight: 700; }

  .detail-box { background: #EFE7F2; padding: 1.5rem; border-radius: 0.5rem; margin-top: 0.5rem; }
  .detail-box-title { font-size: 0.95rem; font-weight: 700; color: #4B0082; margin: 0 0 0.5rem; }
  .detail-box-sub { font-size: 0.8rem; color: #374151; margin: 0 0 0.75rem; }

  .detail-reach { display: flex; flex-direction: column; align-items: center; background: #F5C518; padding: 1rem 1.5rem; border-radius: 0.5rem; margin-top: 0.5rem; }
  .reach-number { font-size: 1.5rem; font-weight: 800; color: #1A1A1A; }
  .reach-label { font-size: 0.7rem; font-weight: 700; letter-spacing: 0.05em; color: #4B0082; }

  /* Footer */
  .footer { padding: 2rem 1.25rem; background: linear-gradient(90deg, #EFE7F2 0%, #FAF6E7 100%); }
  @media (min-width: 768px) { .footer { padding: 2rem 2.5rem; } }
  .footer-home-link { font-weight: 700; font-size: 0.75rem; letter-spacing: 0.05em; color: #4B0082; text-decoration: none; }
  .footer-home-link:hover { text-decoration: underline; }

  .max-w-7xl { max-width: 1280px; margin: 0 auto; }
</style>