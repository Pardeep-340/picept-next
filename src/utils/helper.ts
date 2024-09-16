import {
  ABOUT_US_PATH_LINK,
  BLOGS_PATH_LINK,
  BOOK_DEMO_PATH_LINK,
  EXPLORE_PATH_LINK,
  GITHUB_PATH_LINK,
  LINKEDIN_PATH_LINK,
  LLM_PATH_LINK,
  PRICING_PATH_LINK,
  SMART_ROUNTING_PATH_LINK,
  TWITTER_PATH_LINK,
  UNIVERSAL_API_PATH_LINK,
  YOUTUBE_PATH_LINK,
} from "./const";
//===================NAVBAR DATA  LISTS===================//
export const NAV_LINK_LIST = [
  {
    title: "Product",
    links: "/",
    dropdown: [
      { subtitle: "Smart Routing", url: SMART_ROUNTING_PATH_LINK },
      { subtitle: "Universal API", url: UNIVERSAL_API_PATH_LINK },
      { subtitle: "LLM Observability", url: LLM_PATH_LINK },
    ],
  },
  { title: "Explore", links: EXPLORE_PATH_LINK },
  { title: "Pricing", links: PRICING_PATH_LINK },
];
//===================PERFORMANCE OVERVIEW LISTS===================//
export const PERFORMANCE_METRICS_LIST = [
  {
    value: "+99%",
    metric: "Cost",
  },
  {
    value: "+110%",
    metric: "Speed",
  },
  {
    value: "-95%",
    metric: "Latency",
  },
  {
    metric: "Providers",
    value: "15+",
  },
  {
    metric: "Models",
    value: "100+",
  },
  {
    metric: "Uptime",
    value: "99+",
  },
  {
    metric: "Requests served",
    value: "10M+",
  },
];
//===================TRUSTED DATA LISTS===================//
export const TRUSTER_DATA_LISTS = [
  "/assets/images/webp/nvidia-logo.webp",
  "/assets/images/webp/spacex-logo.webp",
  "/assets/images/webp/pg-logo.webp",
  "/assets/images/webp/mit-logo.webp",
  "/assets/images/webp/s-logo.webp",
  "/assets/images/webp/cisco-logo.webp",
  "/assets/images/webp/amazon-logo.webp",
  "/assets/images/webp/nvidia-logo.webp",
  "/assets/images/webp/spacex-logo.webp",
  "/assets/images/webp/pg-logo.webp",
  "/assets/images/webp/mit-logo.webp",
  "/assets/images/webp/s-logo.webp",
  "/assets/images/webp/cisco-logo.webp",
  "/assets/images/webp/amazon-logo.webp",
  "/assets/images/webp/nvidia-logo.webp",
  "/assets/images/webp/spacex-logo.webp",
  "/assets/images/webp/pg-logo.webp",
  "/assets/images/webp/mit-logo.webp",
  "/assets/images/webp/s-logo.webp",
  "/assets/images/webp/cisco-logo.webp",
  "/assets/images/webp/amazon-logo.webp",
  "/assets/images/webp/nvidia-logo.webp",
  "/assets/images/webp/spacex-logo.webp",
  "/assets/images/webp/pg-logo.webp",
  "/assets/images/webp/mit-logo.webp",
  "/assets/images/webp/s-logo.webp",
  "/assets/images/webp/cisco-logo.webp",
  "/assets/images/webp/amazon-logo.webp",
  
];

// ================================FOOTER DATA================================//

export const FOOTER_LINKS_LIST = [
  {
    title: "Product",
    linkList: [
      { subtitle: "Smart Routing", links: SMART_ROUNTING_PATH_LINK },
      { subtitle: "Universal API", links: UNIVERSAL_API_PATH_LINK },
      { subtitle: "LLM Observability", links: LLM_PATH_LINK },
    ],
  },
  {
    title: "Company",
    linkList: [
      { subtitle: "Pricing", links: PRICING_PATH_LINK },
      { subtitle: "About Us", links: ABOUT_US_PATH_LINK },
      { subtitle: "Blogs", links: BLOGS_PATH_LINK },
      { subtitle: "Book A Demo", links: BOOK_DEMO_PATH_LINK },
    ],
  },
  {
    title: "Resources",
    linkList: [
      { subtitle: "Careers", links: "/" },
      { subtitle: "Community", links: "/" },
      { subtitle: "Terms & Conditions", links: "/" },
      { subtitle: "Privacy Policy", links: "/" },
    ],
  },
];
//================================PICEPT DTATA LISTS ================================//
export const PICEPT_RATED_LIST = [
  
  {
    name: "John Rivera",
    profession: "Web Developer",
    image: "/assets/images/webp/jhon.webp",
    description:
      "Picept slashed our LLM costs by routing requests to the most affordable models without compromising quality.",
  },
  {
    name: "Jamie Lee",
    profession: "Data Scientist",
    image: "/assets/images/webp/jhon-lorem.webp",
    description:
      "Picept's universal API eliminates the hassle of multiple LLM integrations, letting us focus on growth, not setup.",
  },
  {
    name: "James Carter",
    profession: "Game Developer",
    image: "/assets/images/webp/james.webp",
    description:
      "Knowing we get the best model from the top provider, with automatic failover and retries ensuring 99+% uptime, is a huge relief.",
  },
  {
    name: "Alex Parker",
    profession: "CEO Design",
    image: "/assets/images/webp/alex-parker.webp",
    description:
      "Picept frees us from the constant need to integrate new LLMs as they emerge, streamlining our workflow and saving us valuable time.",
  },
];
// ===================INTEGRATED DATA LISTA ===================//
export const INTEGRATED_DATA_LISTS = [
  { label: "Python", content: "Python SDK Content" },
  { label: "OpenAI", content: "OpenAI Node SDK Content" },
  { label: "OpenAI Node", content: "OpenAI SDK Content" },
];
//=================== CODE BLOCK =============================//

export const CODE_DISPLAY_LIST = [
  `from picept import Picept

complete = Picept(
    api_key = "Picept_API_key", #Your Picept API Key
    model = "Router1")  #Picept Routers or any models from supported providers
  
response = complete.generate("say. hi?")
`,
  `from openai import OpenAI

Client = OpenAI(
    api_key ="Picept_API_KEY", # This is your Picept
    base_url ='https://picept.ai/api/v1'# Base URL
)

chat_complete = client.chat.completions.create(
   model = "Router1", # Picept Routers or any Mode
   messages = [
    {"role":"user",
    "content":"How Far is the moon ?"
    }
  ],
)
`,
  `const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apikey: "Picept_API_Key",   # This is your Picept API Key
  basePath: 'https://picept.ai/api/v1', # Base URL for Picept
});

const openai = new OpenAIApi(configuration);

async function getChatCompletion() {
  const response = await openai.createChat Completion ({
    model: "Router1 ",   # Picept Routers or any model form supported providers
    messages: [
      { role: "user", content: "How far is the moon?" }
    ],
  });
}
getChatCompletion();
`,
  `from openai import OpenAI

Client = OpenAI(
    api_key = "Picept_API_Key", # This is you Picept API key
    base_url = "https:// picept.ai/api/v1"
)

Chat_complete = client.chat.completions.create(
    model = "xx[azure],xx[vertex-ai],xx[bedrock],xx[openai],....."
    messages = [
      {"role": "user",
       "content": "How far is the moon?"
     }
   ],
)
`,
];
//===================SOCIAL MEDIA LISTS===================//
export const SOCIAL_MEDIA_LIST = [
  {
    icon: "github",
    link: GITHUB_PATH_LINK,
  },
  {
    icon: "twitter",
    link: TWITTER_PATH_LINK,
  },
  {
    icon: "linkedin",
    link: LINKEDIN_PATH_LINK,
  },
  {
    icon: "youtube",
    link: YOUTUBE_PATH_LINK,
  },
];
//===================PICEPT LISTS===================//
export const PICEPT_DELIVER_DATA_LIST = [
  {
    heading: "Blazing fast & efficient Routing",
    title: "Blazing fast & efficient Routing",
    description:
      "Our service executes in just 10ms, slashes API costs by up to 99%, boosts speed, and reduces overall latency",
    image: "/assets/images/webp/saas.webp",
  },
  {
    heading: "Dynamic failover and retry",
    title: "Dynamic failover and retry",
    description:
      "We automatically find the best alternative to route your request to, delivering 99% Uptime",
    image: "/assets/images/webp/dynamic.webp",
  },
  {
    heading: "Unified Model Access",
    title: "Access 100+ models from 15+ providers with a single universal API",
    description:
      "We automatically integrate new models and providers, ensuring you always have access to the best in real-time",
    image: "/assets/images/webp/access-control.webp",
  },
  {
    heading: "Switch risk-free with Picept",
    title: "Switch risk-free with Picept",
    description:
      "Tag your prompt streams, continue using your current model provider, and switch only after reviewing our report to save big.",
    image: "/assets/images/webp/switch-picept.webp",
  },
  {
    heading: "Use OpenAI API Spec",
    title: "Implement Picept API easily with OpenAI spec",
    description:
      "Just change 3 lines of code or use our light Python package. This needs a design, or text animation, something that looks better.",
    image: "/assets/images/webp/ai-spec.webp",
  },
];
//===================PERFORMANCE MEDIA LISTS===================//
export const PERFORMANCE_DATA_LIST = [
  {
    text: "Quality",
    data: [+7, -89, +251, -35],
    url: "/assets/performence-chart/quality.html",
  },
  {
    text: "Cost",
    data: [+7, -89, +251, -35],
    url: "/assets/performence-chart/cost.html",
  },
  {
    text: "Speed",
    data: [+7, -89, +251, -35],
    url: "/assets/performence-chart/speed.html",
  },
  {
    text: "Latency",
    data: [+7, -89, +251, -35],
    url: "/assets/performence-chart/latency.html",
  },
] as const;
