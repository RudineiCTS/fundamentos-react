import { RepositoryItem } from "./RepositoryItem";

const repository ={
  name: 'unform',
  description: 'repository about',
  link:'www.google.com'
}

export function RepositoryList(){
  return(
    <section>
      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository}/>

      </ul>
    </section>
  )
}