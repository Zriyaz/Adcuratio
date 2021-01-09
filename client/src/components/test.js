axios.get(`https://reqres.in/api/users?page=2`)
        .then(response =>setUserprofiles(response.data))

        setLoading(true)
        fetch('https://reqres.in/api/users?page=2')
        .then((response)=>response.json())
        .then((data)=>{
            setUserProfiles(data)
        })
        setLoading(false)

        const [userProfiles, setUserProfiles] = useState()
   const [loading, setLoading] = useState(false)
   const [error, setError] = useState('')


   fetch('https://reqres.in/api/users?page=2')
        .then((response)=>response.json())
        .then((data)=>{
            data.data.map(data=>console.log(data))
            setUserProfiles(data.data)
            setLoading(false)
        })