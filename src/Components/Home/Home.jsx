import YoutubeEmbed from '../YoutubeEmbeded/YoutubeEmbeded';
const Home = () => {
  const embedId = 'wnmW_EwVE4I';
  return (
    <div className='Home w-70'>
      <div className='image-container'>
        <div></div>
      </div>

      <header>
        <h1>Fun with AI</h1>
        <p>Giving OpenAI a go</p>
      </header>

      <div className='description-container'>
        <div className='site-descriptions'>
          <div>
            <h2>What do we have here?</h2>
            <p>
              A small project to demonstrate different use cases for{' '}
              <a href='https://openai.com/'>OpenAI's</a> completion API and its
              associated AI engines.
            </p>
          </div>
          <div>
            <h2>How do you use it?</h2>
            <p>
              Ask it a question. Make it tell you a story. Have it write you
              love song. Whatever comes to your mind throw it into the text box
              and see what gets spit back at you. Give it a shot!
            </p>
          </div>
        </div>
      </div>

      <YoutubeEmbed embedId={embedId} />
    </div>
  );
};

export default Home;
