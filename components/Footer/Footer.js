import { Box, Divider, Paper } from "@mui/material";
import React from "react";
import Section from "./Section";

const FOOTERLINKS = [
  {
    title: "Categories",
    links: [
      "Graphics & Design",
      "Digital Marketing",
      " Writing & Translation",
      "Video & Animation",
      "Music & Audio",
      "Programming & Tech",
      "Data",
      "Business",
      "Lifestyle",
      "Sitemap",
    ],
  },

  {
    title: "About",
    links: [
      "Careers",
      "Press & News",
      "Partnerships",
      "Privacy Policy",
      "Terms of Service",
      "Intellectual Property Claims",
      "Investor Relations",
    ],
  },

  {
    title: "Support",
    links: [
      "Help & Support",
      " Trust & Safety",
      "Selling on GlassTree",
      "Buying on GlassTree",
    ],
  },
  {
    title: "Community",
    links: [
      "Events",
      "Blog",
      "Forum",
      "Community Standards",
      "Podcast",
      "Affiliates",
      "Invite a Friend",
      " Become a Seller",
    ],
  },
];

const Footer = () => {
  return (
    <>
     <Divider />
    <Paper sx={{
       padding:15,
       width:'100%'

    }} elevation={0}>
      <Box sx={{
        display:'flex',
        justifyContent:'space-between',
        
      }}>
        {FOOTERLINKS.map(({ title, links }) => (
          <Section key={title} title={title} list={links} />
        ))}
      </Box>
    </Paper>
    </>
   
  );
};

export default Footer;
