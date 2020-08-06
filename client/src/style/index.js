import styled from 'styled-components';

export const FooterStyle = styled.div`
#footer-main {
    background-color: #2d2b31;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    margin-left: 300px;
    font-family: 'Didact Gothic', sans-serif;
    color: white;
    padding: 4px 4px 2px 8px;
}
#thank-you {
    padding-left: 315px;
    padding-top: 5px;
}
#duck-bio {
    font-size: small;
    text-justify: auto;
}
ul {
    list-style: none;
    columns: 2;
}
#team-duck {
  font-weight: bold;
  text-decoration: underline;
  
}
#meet-team {
  font-weight: bold;
  text-decoration: underline;
}
#created-with {
  font-weight: bold;
  padding-right: 155px;
  text-decoration: underline;
}
a {
  color: #f8f8ff;
}
li {
  list-style: none;
}

`
export const DashboardStyle = styled.div`
.container-main {
    padding-left: 310px;
    padding-top: 140px;
    margin-right: 30px;
    font-family: 'Didact Gothic', sans-serif;
}
.scroll {
    max-height: 600px;
    overflow-y: auto;
}
.invisible-top {
  margin-top: 128px;
}
#welcome-side {
  color: white;
}


// @media only screen and (max-width : 992px) {
//     .container-main {
//         padding-left: 20px;
//     }
//   }
`

export const HeaderStyle = styled.div`
.header-main {
    background-color: #2c2b30;
    position: fixed;
    width: 100%;
    padding: 10px;
    top: 0;
}
#profile-img {
    height: 150px;
    width: 80%;
    margin: 20px;
}
#side-content {
  margin-left: 0px;
  margin-right: 35px;
}
#SemButton {
  margin-top: 5px;
}
#slide-out {
    position: absolute;
    height: 100%;
    width: 300px;
    position: fixed;
    padding-top: 350px;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #3f3f3f;
    overflow-x: hidden;
    padding-top: 20px;
}
#dashboardTitle {
 
  color: white;
}

img {
  float:left;
}


  @media only screen and (min-width : 992px) {
    .invisible-top {
      top: 64px;
    }
  }


@media only screen and (max-width : 992px) {
    .container-main {
        padding-left: 20px;
    }
  }
`

export const RegisterStyle = styled.div`
body{
    background: #003973;
    background: -webkit-linear-gradient(to right, #E5E5BE, #003973);
    background: linear-gradient(to right, #E5E5BE, #003973);
}
.col3 {
    background: #2C2B30;
    padding: 4%;
    color: white;
}
.contact-info{

}
.contact-info, .img-register{
    margin-bottom: 15px;
    color: white;
}
.contact-info, .h2-register{
    margin-bottom: 10%;
}
.contact-form {
    font-weight:500;
}

.contact-form, .button1 {
    background: #222629;
    color: #fff;
    font-weight: 600;
    width: 350px;
}
#welcome-text {
    padding: 5px;
}
#register-submit {
  color: white;
}
.contact-register {
  margin-top: 200px;
  margin-bottom: 150px;
}
#loginContainer {
  margin-top: 250px;
}
`

export const TodoStyle = styled.div`
.scroll2 {
    max-height: 270px;
    overflow-y: auto;
  }
  .button1 {
    margin: 10px;
  }
  .todoListMain .header1 {
      padding: 10px;
      font-size: 16px;
      border: 2px solid #FFF;
      width: 165px;
    }
    .todoListMain .header1 .button1 {
      padding: 10px;
      font-size: 16px;
      margin: 10px;
      margin-right: 0px;
      background-color: #0066FF;
      color: #FFF;
      border: 2px solid #0066FF;
    }
    .todoListMain .header1 button:hover {
      background-color: #003399;
      border: 2px solid #003399;
      cursor: pointer;
    }
    .todoListMain .theList {
      list-style: none;
      padding-left: 0;
      width: 250px;
    } 
    .todoListMain .theList .li-todo {
      color: #333;
      background-color: rgba(255,255,255,.5);
      padding: 15px;
      margin-bottom: 15px;
      border-radius: 5px;
      list-style: none;
      transition: background-color .2s ease-out;
    }
    ul.theList {
      padding: 0;
    }
    .todoListMain .theList li:hover {
      background-color: pink;
      cursor: pointer;
    }
`
export const LoginStyle = styled.div`
#loginCard{
  postition:fixed;
  top:30px;
  margin: 6em;
  background-color: #2c2b30;
  padding: 3em;
  color: #fff;
}
`

export const HeaderStyleHome = styled.div`
  .HeaderNav{ 
  background-color: #2c2b30;
  position: fixed;
  z-index: 5;
  width: 100%;
  padding: 10px;
  top: 0;}

  a{
    color: white
  }

  .loginBtn{
   float: right;
   color: #ffffff
 
  }
`

export const HomeStyle = styled.div`

.sidebar{
  background-color: #2c2b30;
  opacity:.7;
  height: 100%;
  width: 240px;
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  padding-top: 20px;
  padding-right: 10px;

}
.TIcon1{
 margin:50px;
 width:125px;
}
.logInButtons{
 margin:  10% 10% 10% 2%;
 padding: 5% 25% 5% 25%;
}

homepageBody{
  margin-left: 240px; 
  font-size: 28px;
  padding: 0px 10px;
}

a{
  color: white
}

.homepageHeader{
  text-align: center;
  left-margin: 45%
  top-margin: 30%;
  padding: 15% 10% 15% 30%;
  p{
    padding:8% 20% 5% 20%;
    font-size: 16pt;
  }
}
.headerLogo{
  width: 75%
}
.Benefits{
  background-color: #2c2b30;
  opacity:.5;
  width: 100%
  padding-left: 30%
}
.DividerHeadings{
  color: white;
  margin:15% 1% 2% 50%;

}
.benefitsHeader{
  padding-left:10%;
}
.BenefitsSection1{
  background-color: #2c2b30;
  Padding:5%
  Margin-left:30%
  position: relative;
  z-index:10;
  img{
    padding:10% 10% 10% 30%;
  }

}
.benefitsParagraphs{
    color:white;
    text-align: center;
    padding: 10%;
    font-size: 16pt;
}
.secondcolmnoffour{
  background-color: #2c2b30;
  opacity:.
}
.BenefitsSection2{
  background-color: #2c2b30;
  Padding:5%
  Margin-left:30%
  position: relative;
  z-index:10;
  img{
    padding:10% 10% 10% 30%
  }
}
.BenefitsSection3{
  background-color: #2c2b30;
  Padding:5%
  Margin-left:30%
  position: relative;
  z-index:10;
  img{
    padding:10% 10% 10% 30%
  }
}
.actionSection{
  background-color: #2c2b30;
  width:110%;
  margin: -5%;
  opacity:.7;
  padding: 5% 15% 5% 30%
}
.WorksSectionA{
  display: block;
  margin-left: 15%;
  margin-right: auto;
  width: 100%;
}
.WorksSectionB{
  display: block;
  margin-left: 15%;
  margin-right: auto;
  width: 100%;
}
.WorksSectionC{
  display: block;
  margin-left: 15%;
  margin-right: auto;
  width: 100%;
}
.worksText{
  font-size: 16pt;
  padding: 5%;
  text-align: center;
}
.ActionHeader{
  margin: 0% 0% 12% 0%;
}
@media only screen and (max-width: 900px) {
  .sidebar{
    width: 150px
  }
  .homepageHeader{

    p{
      font-size:14pt;
    }
  }

}
@media only screen and (max-width: 600px) {
  .sidebar{
   padding: 15%
   visibility: hidden;
   margin-right: 10px;
  };
  .TIcon1{
    width: 80px;
    margin: 35px;
  }
  .homepageHeader{
    text-align: center;
    left-margin: 50%
    top-margin: 30%;
    padding: 15% 8% 15% 40%;
    p{
      padding:2% 10% 2% 0%;
      font-size: 11pt;
    }
  }
  h1{
    font-size:20pt;
  }
  .BenefitsSection1{
    Padding:5%
    Margin-left:30%
    img{
      padding:10% 10% 10% 30%;
      width: 50px;
    }
    p{
      padding: 2%;
      text-align:  center;
      font-size: 8pt;
    }
  }
  .BenefitsSection2{
    Padding:5%
    Margin-left:30%
    img{
      padding:10% 10% 10% 30%;
      width: 50px;
    }
    p{
      padding: 2%;
      text-align:  center;
      font-size: 8pt;
    }
  }
  .BenefitsSection3{
    Padding:5%
    Margin-left:30%
    img{
      padding:10% 10% 10% 30%;
      width: 50px;
    }
    p{
      padding: 2%;
      text-align:  center;
      font-size: 8pt;
    }
  }
  .TBenes{
    width:110%
  }

  .actionSection{
    width:110%;
    margin: -5%;
    opacity:.7;
    padding: 5% 10% 5% 40%
  }
  .WorksSectionA{
    display: block;
    margin-left: 15%;
    margin-right: auto;
    width: 25%;
    img{
      width: 100px
    }
  }
  .WorksSectionB{
    display: block;
    margin-left: 15%;
    margin-right: auto;
    width: 25%;
    img{
      width: 100px
    }
  }
  .WorksSectionC{
    display: block;
    margin-left: 15%;
    margin-right: auto;
    width: 25%;
    img{
      width: 100px
    }
  }
  .worksText{
    font-size: 8pt;
    padding: 5% 0% 1% 20%;
    text-align: center;
  }
}


.homepageFooter{
  background-color: #2c2b30;
  width: 100%;

}

`