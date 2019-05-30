import React from 'react';
import Layout from '../../components/Layout';
import TitlePrimary from '../../components/TitlePrimary';
import CardComponent from '../../components/CardComponent';
import FormContactUs from '../../components/FormContactUS'; 




const ContactUsView = ()=>{
 

    return(
    <Layout transition={true}>
      <div className="flex-column">
        <TitlePrimary text="Thanks for contac us" />
        <CardComponent
          title="Contac us"
          description={
            // <div>
            //   <p> <span className="primary-text">Name</span>: </p>
            //   <p> <span className="primary-text">Email</span>: </p>
            // </div>
            <FormContactUs/>
          }
        />
      </div>
    </Layout>
    );

}

export default ContactUsView;
