export default {
  name: "headline",
  title: "Headline",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "headerTaglineOne",
      title: "Header Tagline One",
      type: "string",
    },
    {
      name: "headerTaglineTwo",
      title: "Header Tagline Two",
      type: "string",
    },
    {
      name: "socials",
      title: "Socials",
      type: "document",
      fields: [
        {
          name: "github",
          title: "Github",
          type: "string",
        },
        {
          name: "linkedin",
          title: "LinkedIn",
          type: "string",
        },
        {
          name: "twitter",
          title: "Twitter",
          type: "string",
        },
        {
          name: "blog",
          title: "Blog",
          type: "string",
        },
        {
          name: "email",
          title: "Email",
          type: "string",
        },
      ],
    },
  ],
};
