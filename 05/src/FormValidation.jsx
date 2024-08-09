import React, {useState} from 'react'


const FormValidation = () => {


    const [name,setName] = useState('');
    const[email,setEmail]=useState();
    const[password,setPassword]=useState();
    const[confirmPassowrd,setConfirmPassword]=useState();
    const[age,setAge]=useState();
    const[gender,setGender]=useState();
    const[errors,setErrors]=useState('');

    const vaildateForm = () =>{
        const errors = {};
        if(!name){
            errors.name = 'Name is Required';
        }
        if(!email){
            errors.email='Email is Required';
        }else if(!/\S+@\S+\.\S+/.test(email)){
            errors.email='Email is Invalid';
        }
        if(!password){
            errors.passsword='Password is Required';
        }else if(password.length <6){
            errors.passsword='Password must be 6 characters';
        }
        if(!confirmPassowrd){
            errors.confirmPassowrd='Confirm Password is Required';
        }else if(confirmPassowrd !== password){
            errors.confirmPassowrd='Password DO NOT MATCH';
        }
        if(!age){
            errors.age='Age is Required';
        }else if(isNaN(age) || age<18){
            errors.age = 'Age must be a number and at least 18';
        }
        if(!gender){
            errors.gender = 'Gender is Required';
        }

        console.log(errors)
        return errors;
    }

    function handleSubmit(e){
        e.preventDefault();

        const validationErrors = vaildateForm();
        if(Object.keys(validationErrors).length>0){
            setErrors(validationErrors);
        }else{
            console.log("Form Submitted..")
        }
    }
  return (
    <div className='container'>
        <h1>Form Validation</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type='text' value={name} onChange={(e)=>{
                    setName(e.target.value);
                }}/>
                {errors.name}
            </div>
            <div>
                <label>Email:</label>
                <input type='text' value={email} onChange={(e)=>{
                    setEmail(e.target.value);
                }}></input>
                {errors.email}
            </div>
            <div>
                <label>Password:</label>
                <input type='password' value={password} onChange={(e)=>{
                    setPassword(e.target.value);
                }}></input>
                {errors.passsword}
            </div>
            <div>
                <label>Confirm Password:</label>
                <input type='password' value={confirmPassowrd} onChange={(e)=>{
                    setConfirmPassword(e.target.value);
                }}></input>
                {errors.confirmPassowrd}
            </div>
            <div>
                <label>Age:</label>
                <input type='text' value={age} onChange={(e)=>{
                    setAge(e.target.value);
                }}></input>
                {errors.age}
            </div>
            <div>
                <label>Gender:</label>
                <select value={gender} onChange={(e)=>{
                    setGender(e.target.value);
                }}>
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                {errors.gender}
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>
  )
}

export default FormValidation