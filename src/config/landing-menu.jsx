const Menu = [
  { is_header: true, title: "Navigation" },
  {
    path: "/lands",
    title: "Lands",
    children: [
      { path: "/lands", title: "Buy Land" },
      { path: "/dashboard/purchased-lands", title: "Purchased Lands" },
      { path: "/traffic-zone", title: "Traffic Zone" },
    ],
  },
  {
    path: "/dashboard/stakes",
    title: "Staking",
    children: [
      { path: "/pme", title: "PME" },
      { path: "/nft", title: "NFT" },
    ],
  },
  {
    path: "/market",
    title: "Market",
    children: [
      { path: "/lands", title: "Land" },
      { path: "/nft", title: "NFT" },
    ],
  },
  { path: "/news", title: "News" },
  {
    path: "/voters",
    title: "voters",
    children: [
      { path: "/lands", title: "PCOLAND Candidates" },
      { path: "/nft", title: "PCOLAND Voters" },
      { path: "/nft", title: "Become A Voter" },
    ],
  },
  {
    path: "/support",
    title: "Support",
    children: [
      { path: "/faq", title: "FAQ" },
      { path: "/contact-us", title: "Contact Us" },
      { path: "/errors", title: "Backend-Errors" },
      { path: "/contract-errors", title: "Smart Contract Errors" },
    ],
  },
  {
    path: "/about",
    title: "About",
    children: [
      { path: "/roadmap", title: "Roadmap" },
      { path: "/rules", title: "Rules and Guidline" },
      { path: "/whitepaper", title: "White Paper" },
      { path: "/rules", title: "Smart Contract" },
      { path: "/roadmap", title: "CEX" },
      { path: "/rules", title: "Tokenomic" },
    ],
  },
  {
    path: "/network",
    title: "Network",
    children: [
      { path: "/rpc-list", title: "RPC List" },
      { path: "/tx-scan", title: "TX Scan" },
    ],
  },
];

export default Menu;
