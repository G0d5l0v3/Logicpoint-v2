import mail from "../../assets/images/mail.png";
import phone from "../../assets/images/phone-call.png";
import location from "../../assets/images/location.png";

const FooterItems = [
    {
      id: 1,
      title: "General Information",
      description:
        "For general information or information about the Logicpoint story, contact:",
      style: "lg:border-r px-[3rem]",
      path: email,
      link: "support@logicpointng.com"
    },
    {
      id: 2,
      title: "Careers",
      description:
        "Are you interested in joining the Logicpoint team? Reach us at",
      style: "lg:border-r px-[3rem]",
      path: email,
      link: "careers@logicpointng.com"
    },
    {
      id: 3,
      title: "Sales",
      description: "To speak to us about sales and partnership ideas, say hello:",
      style: "px-[3rem]",
      path: email,
      link: "sales@logicpointng.com"
    },
  ];
  
  export default FooterItems;