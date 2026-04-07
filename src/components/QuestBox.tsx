
function QuestBox({title, rarity,children}) {
  return (
    <div className="quest-box">
        <h3>{title}</h3>
        {rarity && <span className="tag"> {rarity}</span>}
        <div className="quest-content">
            {children}
        </div>
    </div>
  )
}

// QuestBox.propTypes = {
// title : PropTypes.string.isRequired,
// rarity: PropTypes.string,
// children :  PropTypes.node.isrequired,
// };
// QuestBox.defaultProps = {
//     rarity= null
// }

export default QuestBox