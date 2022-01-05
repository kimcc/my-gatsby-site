import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage = () => {
  return (
   <Layout pageTitle="Home Page">
     <p>
       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum veniam voluptatum aliquam totam mollitia itaque molestias ullam a explicabo culpa ipsam neque expedita cumque et ea, rerum corporis suscipit.
     </p>
     <StaticImage
        alt="Microscope image"
        src="../images/image.jpg"
      />
   </Layout>
  );
}

export default IndexPage;
