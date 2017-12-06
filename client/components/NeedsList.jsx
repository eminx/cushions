const NeedsList = (props) => (
  <List selection divided verticalAlign='middle'>
    {props.needs.map((need) => (
      <List.Item>
        <List.Content>
          <List.Header>
            {need.text}
          </List.Header>
          {need.guide}
        </List.Content>
      </List.Item>
    ))}
  </List>
)

export default NeedsList;