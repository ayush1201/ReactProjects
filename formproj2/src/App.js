import { useState } from "react";
import "./App.css";

function App() {
  const [formData,setFormData] = useState({
    firstName : "",
    secondName : "",
    email : "",
    country : "India",
    streetAddress : "",
    city : "",
    state : "",
    postalCode : "",
    comments : false,candidates : false,offers : false,
    pushNotifications : "",

  });


  // console.log(formData.firstName);

  function changeHandler(event){
    const {name,value,checked,type} = event.target;
    setFormData((prev) => ({
      ...prev,[name]:type === "checkbox" ? checked : value
    }))
  }

  function submitHandler(event){
    event.preventDefault();
    console.log("Printing final form data");
    console.log(formData);
  }

  return(
    <div className="flex justify-center items-center">
      <form onSubmit={submitHandler} className="border-2 border-black border-opacity-5 p-8 w-[50%]">

        <div className="flex flex-col justify-center gap-2">
          <label htmlFor="firstName" className="text-black font-medium">First name</label>
          <input type="text" 
            name="firstName"
            placeholder="Ayush"
            onChange={changeHandler}
            value={setFormData.firstName}
            className="w-[100%] p-2 mb-1 border-opacity-50 rounded-[8px] border-[1px] border-black placeholder:text-[18px] border-b-blue-500"
          />
        </div>
        
        <div className="flex flex-col justify-center gap-2">
          <label htmlFor="secondName" className="text-black font-medium">Last name</label>
          <input type="text" 
            name="secondName"
            placeholder="Gupta"
            onChange={changeHandler}
            value={setFormData.secondName}
            className="w-[100%] p-2 mb-1 border-opacity-50 rounded-[8px] border-[1px] border-black placeholder:text-[18px] border-t-blue-500"
          />
        </div>
        

        <div className="flex flex-col justify-center gap-2">
          <label htmlFor="email" className="text-black font-medium">Email address</label>
          <input type="email" 
            name="email"
            placeholder="ayush1201@gmail.com"
            onChange={changeHandler}
            value={setFormData.email}
            className="w-[100%] p-2 mb-1 border-opacity-50 rounded-[8px] border-[1px] border-black placeholder:text-[18px] border-b-blue-500"
          />
        </div>

        <div className="flex flex-col justify-center gap-2">
          <label htmlFor="country" className="text-black font-medium">Country</label>
          <select name="country"
          className="w-[100%] p-2 mb-1 border-opacity-50 rounded-[8px] border-[1px] border-black placeholder:text-[18px] border-t-blue-500"
          onChange={changeHandler}
          value={formData.country}>
            <option>India</option>
            <option>United States</option>
            <option>Canada</option>
            <option>Australia</option>
          </select>
        </div>

        <div className="flex flex-col justify-center gap-2">
          <label htmlFor="streetAddress" className="text-black font-medium">Street address</label>
          <input type="text" 
            name="streetAddress"
            placeholder="H 18 Kali street"
            onChange={changeHandler}
            value={setFormData.streetAddress}
            className="w-[100%] p-2 mb-1 border-opacity-50 rounded-[8px] border-[1px] border-black placeholder:text-[18px] border-b-blue-500"
          />
        </div>

        <div className="flex flex-col justify-center gap-2">
          <label htmlFor="city" className="text-black font-medium">City</label>
          <input type="text" 
            name="city"
            placeholder="Delhi"
            onChange={changeHandler}
            value={setFormData.city}
            className="w-[100%] p-2 mb-1 border-opacity-50 rounded-[8px] border-[1px] border-black placeholder:text-[18px] border-t-blue-500"
          />
        </div>

        <div className="flex flex-col justify-center gap-2">
          <label htmlFor="state" className="text-black font-medium">State/Province</label>
          <input type="text" 
            name="state"
            placeholder="New Delhi"
            onChange={changeHandler}
            value={setFormData.state}
            className="w-[100%] p-2 mb-1 border-opacity-50 rounded-[8px] border-[1px] border-black placeholder:text-[18px] border-b-blue-500"
          />
        </div>

        <div className="flex flex-col justify-center gap-2">
          <label htmlFor="postalCode" className="text-black font-medium">Zip/Postal code</label>
          <input type="text" 
            name="postalCode"
            placeholder="110018"
            onChange={changeHandler}
            value={setFormData.postalCode}
            className="w-[100%] p-2 mb-1 border-opacity-50 rounded-[8px] border-[1px] border-black placeholder:text-[18px] border-t-blue-500"
          />
        </div>      

        

        <fieldset className="flex flex-col gap-2">
          <legend className="text-black font-medium pt-2">By Email</legend>
          
          <div className="flex gap-3 items-baseline pt-5">
            <input type="checkbox" 
              name="comments"
              checked={formData.comments}
              onChange={changeHandler}
              className="w-[15px] h-[15px]"
            />
            <div className="flex flex-col">
              <label htmlFor="comments" className="text-black font-medium">Comments</label>
              <p>Get notified when someone posts a comment on a posting</p>
            </div>
          </div>

          <div className="flex gap-3 items-baseline">
            <input type="checkbox" 
              name="candidates"
              checked={formData.candidates}
              onChange={changeHandler}
              className="w-[15px] h-[15px]"
            />
            <div className="flex flex-col">
              <label htmlFor="candidates" className="text-black font-medium">Candidates</label>
              <p>Get notified when candidate applies for a job</p>
            </div>
          </div>

          <div className="flex gap-3 items-baseline">
            <input type="checkbox" 
              name="offers"
              checked={formData.offers}
              onChange={changeHandler}
              className="w-[15px] h-[15px]"
            />
            <div className="flex flex-col">
              <label htmlFor="offers" className="text-black font-medium">Offers</label>
              <p>Get notified when candidate accepts or rejects offer</p>
            </div>
          </div>
          
        </fieldset>

        <br />

        <fieldset>
          <legend className="text-black font-medium ">Push Notifications</legend>
          <p>These are delivered via SMS to your mobile phones</p>

          <div className="flex flex-col gap-2">
            <div className="flex items-center">
              <input type="radio" 
                id="pushEverything"
                name="pushNotifications"
                value="Everything"
                onChange={changeHandler}
                className="w-[15px] h-[15px]"
              />
              <label htmlFor="pushEverything" className="text-black font-medium pl-3">Everything</label>
            </div>
          
            <div className="flex items-center">
              <input type="radio" 
                id="pushEmail"
                name="pushNotifications"
                value="Same as Email"
                onChange={changeHandler}
                className="w-[15px] h-[15px]"
              />
              <label htmlFor="pushEmail" className="text-black font-medium pl-3">Same as Email</label>
            </div>

            <div className="flex items-center">
              <input type="radio" 
                id="pushNothing"
                name="pushNotifications"
                value="No Push Notifications"
                onChange={changeHandler}
                className="w-[15px] h-[15px]"
              />
              <label htmlFor="pushNothing" className="text-black font-medium pl-3">No Push Notifications</label>
            </div>
          </div>

        </fieldset>

        <button className="bg-blue-500 text-white font-bold rounded-[5px] px-4 py-2 mt-2">Save</button>

      </form>
    </div>
  )
}

export default App;
