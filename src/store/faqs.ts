import { writable, type Writable } from "svelte/store"



export const faqState = writable(NaN)

export const faqs = [
    {
        title: "How can I join the L2G Syndicate?",
        body: 'Interested individuals, institutions and investing groups can apply to join the syndicate by clicking on the "Invest With Us" button at the top of the page. On receipt of your application, due diligence and background checks will be undertaken. Applicants with a clean report will receive further details about the onboarding process. Once successfully onboarded, members will have access to our deal room and be able to co-invest with Launch to Grow.'
    }, {
        title: "What is the maximum I can invest?",
        body: "We strongly advise that you do not invest more than 10% of your annual income on any company as startup investing is risky and should only be a part of a wider portfolio diversification strategy."
    }, {
        title: "Are there fees associated with investing in the L2G Syndicate?",
        body: "The L2G Syndicate charges a one-time $100 administrative fee that covers the cost of all legal, compliance, and back-office processes. A 20% transaction fee is charged with every investment made in an entity brought before the Syndicate."
    }, {
        title: "What is the minimum I can invest?",
        body: "The minimum you can invest in any one company is $100 or the equivalent in your local currency charged at the prevailing black-market rate."
    }, {
        title: "How is the L2G Syndicate team compensated for the work they do?",
        body: "The L2G Syndicate would only be incentivized when your investment in an entity makes a successful exit. A 20% carried interest is charged on all successfully exited entities."
    }, {
        title: "What is a Carried Interest?",
        body: "Carried interest is a share of the profit paid to the L2G Syndicate team to compensate and incentivize them. It is a performance-based compensation that aligns investors’ interest with the syndicate team so as to motivate the latter to find outperforming deals and support them to successful exits."
    }, {
        title: "How risky is this type of investment and what is an expected return?",
        body: "Investing in early-stage companies involves a high level of risk and may result in investors losing all or some of their principal investment sum. Even when we conduct due diligence on the companies we present to you, the information we provide about these companies may not be sufficient enough to help you make a decision. We advise that you assess the information provided more carefully to a satisfactory level of personal conviction that allows you to proceed with the investment."
    }, {
        title: "What is a typical investment time horizon on the L2G Syndicate?",
        body: "The average time for a company to transition from one business stage to another vary. The average African business may take a little longer to make such transitions due to the infrastructural challenges on the continent. <br><br> Globally, the time horizon for investments in illiquid asset classes such as venture capital takes 5 – 10 years. While we aim at meeting up with global practice, we will be patient with interesting companies that need some more time to grow."
    }, {
        title: "Are there other ways Launch to Grow supports founders?",
        body: "Beyond our venture capital, consulting and events services, we will happily refer founders to industry experts and partner organisations in our network who can provide them with the following services and more while fitting their budget: <br> <ul class='faq__list-container'><li>Legal Services</li><li>Digital Marketing</li><li>Web & App Development</li></ul>"

    }
]