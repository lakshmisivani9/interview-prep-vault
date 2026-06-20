const topics = ['All', 'Java', 'Spring', 'React', 'DSA', 'SQL']

function FilterBar({ selected, onSelect }) {
  return (
    <div style={styles.container}>
      {topics.map(topic => (
        <button
          key={topic}
          onClick={() => onSelect(topic)}
          style={{
            ...styles.btn,
            backgroundColor: selected === topic ? '#7c83fd' : '#f0f0f0',
            color: selected === topic ? 'white' : '#333',
          }}
        >
          {topic}
        </button>
      ))}
    </div>
  )
}

const styles = {
  container: { display: 'flex', gap: '10px', flexWrap: 'wrap' },
  btn: {
    padding: '8px 18px',
    borderRadius: '20px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '500',
  }
}

export default FilterBar