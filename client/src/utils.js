

axios.get('https://reqres.in/api/users?page=2')
        .then((data)=>setUserProfiles(data.data.data))