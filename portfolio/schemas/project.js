export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [
        {
          name: "name",
          title: "Name",
          type: "string",
        },
      ],
      // set a many to many relationship with the category type
    },
    {
      name: "description",
      title: "Description",
      type: "string",
      // convert the description to block content (rich text)
    },
    {
      name: "imageURL",
      title: "Image URL",
      type: "string",
    },
    {
      name: "demoURL",
      title: "Demo URL",
      type: "string",
    },
    {
      name: "githubURL",
      title: "GitHub URL",
      type: "string",
    },
  ],
};
