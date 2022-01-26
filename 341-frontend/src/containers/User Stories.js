import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import About from "./About";
import Home from "./Home";

function UserStories(props){
    function onButtonClick() {
        console.log("back");
        navigate("/home");
      }
      return(
          <div>
              <h2>
              User Story: Profile System
              </h2>

              <p>
              On the index screen the customer has access to a profile section in one of the top corners of the screen. 
              Upon pressing it they are taken to a login page. If they place their unique username and password and press 
              the confirm button, they are logged in here and returned to the page they were on before logging in. 
              However, if they instead press on the signup button under the login section, 
              they are taken to a new page to create their account.
              </p>
              <p>
              The site first asks if this is a personal or business account. For a personal account, 
              the user is taken to a new page and fills in their full name, shipping address, credit card or debit card information 
              (chosen via selection menu), email address, and their new username and password. The system ensures the uniqueness of 
              the username, the validity of the address and credit or debit information and requires a minimum of 8 characters for 
              the password. For business, all the previous information is required on the new page, but it also requires a business
               location, and access to a PayPal or bank account to send the money made from selling their products. 
              </p>
              <p>
              Once either form is completed, the user is registered and given a confirmation message with a button prompt to return to the home page.
              However, if they made a business account, an email will be sent to them explaining the additional verification process needed for their 
              account since verified businesses receive priority in search results. With their profile, the user skips needing to input any address 
              or financial information when buying or selling a product through the site. The profile also has a Wishlist feature, meaning any product 
              could be added to or removed from the list and the user is notified through email when one or more items on the list go on sale, 
              are no longer out of stock, or are removed from the site. 
              </p>
              <p>
              Once signed in the button originally used to access to log in page is now replaced by three buttons that allow the user to log out,
               see their Wishlist or modify their profile information. The modify profile page also allows them to delete their profile.
              </p>
          </div>
      )
}