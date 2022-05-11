export function RepositoryItem (props){
  return (
    <li>
      {/* {props.repository ?? 'default'} */}
          <strong>{props.repository.name}</strong>
          <p>{props.repository.description}</p>

          <a href={props.repository.html_url}>acessas repositorio</a>
    </li>
  )
}