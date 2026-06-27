export function load({ params }) {
  const initiatives = [
    {
      id: 1,
      name: "Volunteers Training",
      slug: "volunteers-training",
      category: "Capacity Building",
      description: "Participants trained in leadership skills, community mobilization and teamwork.",
      image_file: "/assets/yan-volunteerism.jpg",
      status: "",
      location: "",
      years_active: [],
      partners: [],
      activities: [],
      reach: {},
      companion_resource: "",
      manual_objectives: []
    },
    {
      id: 2,
      name: "The How-to-Learn Initiative",
      slug: "the-how-to-learn-initiative",
      category: "Education",
      description: "An education-focused initiative to provide effective learning systems for learners.",
      image_file: "/assets/yan-education.jpg",
      status: "Pilot phase",
      location: "Mwkichi Secondary School, Lilongwe",
      years_active: [],
      partners: [],
      activities: [],
      reach: {},
      companion_resource: "The How-to-Learn Manual",
      manual_objectives: [
        "Effectively grasp concepts in the classroom",
        "Boost their productivity",
        "Enhance memory retention",
        "Achieve optimal home/school/life balance for excellent academic performance"
      ]
    },
    {
      id: 3,
      name: "Back to School Starter Pack Project",
      slug: "back-to-school-starter-pack-project",
      category: "Education",
      description: "Hundreds of school supplies donated to learners.",
      image_file: "/assets/yan-climate.jpg",
      status: "",
      location: "",
      years_active: [2020, 2023, 2025],
      partners: [],
      activities: [],
      reach: {},
      companion_resource: "",
      manual_objectives: []
    },
    {
      id: 4,
      name: "Library Rehabilitation Project",
      slug: "library-rehabilitation-project",
      category: "Education",
      description: "Over 500 books donated at Chimutu L.E.A Primary School in Lilongwe.",
      image_file: "/assets/yan-volunteerism.jpg",
      status: "",
      location: "Chimutu L.E.A Primary School, Lilongwe",
      years_active: [2019],
      partners: [],
      activities: [],
      reach: { youth_reached: 0, community: "", books_donated: 500 },
      companion_resource: "",
      manual_objectives: []
    },
    {
      id: 5,
      name: "Pano Tadziwa! (Now I Know!) SRHR Policy Awareness Campaign",
      slug: "pano-tadziwa-srhr-policy-awareness-campaign",
      category: "Health",
      description: "A campaign on Sexual and Reproductive Health and Rights (SRHR) policy awareness.",
      image_file: "/assets/yan-education.jpg",
      status: "",
      location: "Chilomoni",
      years_active: [],
      partners: ["Athena Network", "UNAIDS"],
      activities: [
        "Organized workshops on SRHR",
        "Translated jargon in policy documents to remove language barriers",
        "Knowledge cascaded to 200 youth through arts and theatre for development"
      ],
      reach: { youth_reached: 200, community: "Chilomoni", books_donated: 0 },
      companion_resource: "",
      manual_objectives: []
    }
  ];

  const initiative = initiatives.find(p => p.slug === params.slug);

  return {
    initiative
  };
}