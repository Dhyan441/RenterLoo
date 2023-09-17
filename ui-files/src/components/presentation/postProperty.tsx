import React, { useState, useEffect } from 'react';
import ThemeProvider from '../theme-provider';
import Navbar from '../defaultNavbar';

export function PostProperty() {
  const [bufferData, setBufferData] = useState({} as any)
  
  const inputHandler = (e : any) => {
    const target = e.target;
    let copy = bufferData;
    console.log(target.name);
    if (target.type === "number") {
      copy[target.name] = parseFloat(target.value);
    }else{
      copy[target.name] = target.value;
    }
    setBufferData(copy);
  }

  const onSubmit = async () => {
  
      const postData = {
        email: bufferData.email,
        address: bufferData.address,
        price: bufferData.price,
        info: bufferData.additionalInfo,
      };
       // Replace with your API endpoint
      console.log("Data to send to DynamoDB", postData);

      const response = await fetch("/apiPush", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      if (response.ok) {
        console.log("Data successfully posted to server!");
        // Optionally reset form fields or perform other actions on success
      } else {
        console.error("Failed to post data to server");
      }


  };
  

  return (
    <ThemeProvider>
      <Navbar />
      
      <div
        style={{
          display: 'flex', // Use flex display to arrange items horizontally
          alignItems: 'center', // Vertically center items
          margin: '200px'
        }}
      >
        <div
          style={{
            maxWidth: '400px',
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#f9f9f9',
            marginRight: '20px', // Add some space between the form and image
          }}
        >
          <h1
            style={{
              fontSize: '24px',
              marginBottom: '20px',
              textAlign: 'center',
            }}
          >
            Post Your Property
          </h1>
          <form>
          <input
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }}
            onInput={inputHandler}
            name="firstName"
            type="text"
            placeholder="First Name"
            // {...register('firstName', { required: true, maxLength: 80 })}
          />

          <input
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }}
            onInput={inputHandler}
            type="text"
            placeholder="Last Name"
            name="lastName"
            // {...register('lastName', { required: true, maxLength: 100 })}
          />

          <input
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }}
            onInput={inputHandler}
            type="text"
            placeholder="Email"
            name="email"
            // {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
          />

          <input
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }}
            onInput={inputHandler}
            type="tel"
            placeholder="Mobile Number"
            name="mobileNumber"
            // {...register('mobileNumber', {
            //   required: true,
            //   minLength: 6,
            //   maxLength: 12,
            // })}
          />

          <textarea
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              height: '100px',
            }}
            onInput={inputHandler}
            placeholder="Address"
            name="address"
            // {...register('address', {})}
          />

          <input
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }}
            onInput={inputHandler}
            type="number"
            placeholder="Price"
            name="price"
            // {...register('price', {})}
          />

          <textarea
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              height: '100px',
            }}
            onInput={inputHandler}
            placeholder="Term"
            name="term"
            // {...register('term', {})}
          />  

          <textarea
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              height: '100px',
            }}
            onInput={inputHandler}
            placeholder="Additional Information"
            name="additionalInfo"
            // {...register('additionalInfo', {})}
          />

          {/* Image upload input */}
          <input
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }}
            type="file"
            accept="image/*"
            // {...register('image', { required: true })}
          />

          <button
            style={{
              display: 'block',
              width: '100%',
              padding: '10px',
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              fontSize: '16px',
              cursor: 'pointer',
              transition: 'background-color 0.3s',
            }}
            type="button"
            // type="submit"
            //onClick={() => handleSubmit(onSubmit)}
            onClick={() => onSubmit()}
          >
            Submit
          </button>
        </form>
        </div>
        <img src="./public/housey.svg" alt="Your Image Description" style={{ float: "right", marginLeft: "10px" }}/>
      </div>
    </ThemeProvider>
  );
}

export default PostProperty;

