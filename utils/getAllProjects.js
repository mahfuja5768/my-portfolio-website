
export const getAllProjects = async() => {
    const res = await fetch('/projects.json',{
        next:{
            revalidate:30
        }
    })
    return res.json()

};