const Loading = () => {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <div className='lds-ripple'>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
export default Loading;
