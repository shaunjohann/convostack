/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    // By default, Docusaurus generates a sidebar from the docs folder structure
    tutorialSidebar: [
        "README",
        "the-basics",
        {
            type: "category",
            label: "Getting Started",
            link: {
                type: "doc",
                id: "getting-started/quickstart-react-express-playground",
            },
            items: [{ type: "autogenerated", dirName: "getting-started" }],
        },
        {
            type: "category",
            label: "Frontend",
            link: {
                type: "doc",
                id: "frontend/index",
            },
            items: [{ type: "autogenerated", dirName: "frontend" }],
        },
        {
            type: "category",
            label: "Backend",
            link: {
                type: "doc",
                id: "backend/index",
            },
            items: [{ type: "autogenerated", dirName: "backend" }],
        },
        {
            type: "category",
            label: "Production",
            link: {
                type: "doc",
                id: "production/index",
            },
            items: [{ type: "autogenerated", dirName: "production" }],
        },
        {
            type: "category",
            label: "TS/JS API Reference",
            link: {
                type: "doc",
                id: "ts-js-api/index",
            },
            items: [{ type: "autogenerated", dirName: "ts-js-api" }],
        },
        {
            type: "category",
            label: "GraphQL API Examples",
            items: [{ type: "autogenerated", dirName: "graphql-api-examples" }],
        },
        {
            type: "category",
            label: "GraphQL API Reference",
            link: {
                type: "doc",
                id: "graphql-api/index",
            },
            items: [{ type: "autogenerated", dirName: "graphql-api" }],
        },
        {
            type: "category",
            label: "Contributing",
            link: {
                type: "doc",
                id: "contributing/index",
            },
            items: [{ type: "autogenerated", dirName: "contributing" }],
        },
    ],
};

module.exports = sidebars;
