const initialState = {
  texts: [
    {
      header: 'Web Development for you and your mom',
      title: 'bio',
      content: `
          Hi there! It's such a great to see you here! I'm front-end developer based in Ukraine. I'm passionate about development world. I've lived in this world since I was in school and a lot of things have happened. <br /><br />
          You can briefly look what my mind was busy about in my <a href="https://www.dropbox.com/s/sj43bw7dfa18pa4/cv.pdf?dl=0" target="_blank" onclick="ga('send', 'event', 'buttons', 'click', 'download-cv-top');">cv</a> or you can scroll down and read it more detailed but less structured.<br /><br />
          PS: Work/life balance is something very important for me. I have a lovely girlfriend and amazing doggie and plenty of hobbies :) And I do believe that my time is the biggest resource I have.

        `
    },
    {
      title: 'development: chapter 1',
      content: `
          As I wrote I started coding from my school years. It was small e-shop projects on joomla and wordpress for some local championships.<br /><br />
          That was quite a success and it was more than a reason to continue and get a Bachelor's degree in Programmer Engineering. That gave me a lot of basic knowledge starting from c#'s #include and ending with learning some openGL magic, and mysql tricks.
          <br /><br />
          Besides it, I worked on weekends on upwork and grabbed some part-time work on holidays as a full-stack developer in a small local company. It was quite passionate people who teach me how to deal with monsters like Angular, Ember, Backbone, Symphony and Yii. That was also a great opportunity for me to implement something new and propose to use everything I wanted. From my initiative, we had few projects on express.js, we wrote some tests on Jest, we tried Ionic(react native wasn't there yet) and all our projects used Sass with tuned Gulp(or Grunt).
          <br /><br />
          After I was graduated I finally sign a contract with the same local company for a full-time position, but in a few years our paths diverged and I was ready for much bigger steps.
        `
    },
    {
      title: 'development: chapter 2',
      content: `
          I'm pretty quickly found a great vacancy in the neighbor city - Dnipro. Its a great team and project I'm still working in. For three years here I'm mostly working with Vue.js and React.js, but from times-to-times, I'm not scared to dive into few React-Native or Angular projects.
          <br /><br />
          My role here is mostly being front-end hero, Its a lot of work with charts, visualizing and allow users to edit and update big chunks of data. At the same time, here I started to value my time as never before. Yes, I think I'm much lazier then I was but in a good way. We're trying to automate everything that takes too much time, that's why we're minimized and simplified steps for ci/cd with pipelines, trying test as much as we can with Jest and creating some custom npm packages for being able to quickly reuse our components in future projects. My part here was to implement and structurize it all on the front-end side.
          <br /><br />
          Also, when I first came to this company I was a first fully front-end guy in the company and as long as we're expanding I took a part in mentoring few new guys, I pretty loved this part because now I can quite be proud of the team we have now.
          <br /><br />
          Sometimes Im also implementing my small "just for fun" projects on github using react/redux you can check my humble repos
          on <a href="https://github.com/greenxiii" onclick="ga('send', 'event', 'buttons', 'click', 'github-top');" target="_blank">GITHUB</a> 
          and <a href="http://codepen.io/GreenXIII/" onclick="ga('send', 'event', 'buttons', 'click', 'codepen');" target="_blank">CODEPEN</a>
        `
    },
    {
      title: 'design',
      content: `
          As a designer, I worked a few years in two first years in university and it was something like a hobby because I was quite loaded via student's works and my head was in exploding state till evening.
          <br /><br />
          So, to make little rest and have money from this time I was drawing logos and websites.
          <br /><br />
          After this, I direct all my efforts to be a cool web developer. But, from time to time, I open Adobe Photoshop or Adobe Illustrator and draw something for my projects or just for fun. In general, it helps me to understand designers, and I rarely had conflicts with this design part of the team.
          <br /><br />
          You can see my works on <a href="https://dribbble.com/greenxiii" onclick="ga('send', 'event', 'buttons', 'click', 'dribbble');" target="_blank">Dribbble</a> and <a href="https://www.behance.net/greenxiii" onclick="ga('send', 'event', 'buttons', 'click', 'behance');"  target="_blank">behance</a>.
        `
    },
    {
      title: 'achivements',
      content: `
          OnePageLove Award: <a href="https://onepagelove.com/greenxiii" onclick="ga('send', 'event', 'buttons', 'click', 'onepagelove');" target="_blank">[link]</a><br /><br />
          Mention in "The Essentials of the Split Screen Trend in Web Design" article: <a href="https://visualhierarchy.co/blog/split-screen-trend-in-web-design/" onclick="ga('send', 'event', 'buttons', 'click', 'design-trend');" target="_blank">[link]</a><br /><br />
          Mention in "How to design the perfect single page website" article: <a href="http://www.webdesignerdepot.com/2014/12/how-to-design-the-perfect-single-page-website/" onclick="ga('send', 'event', 'buttons', 'click', 'single-page-article');" target="_blank">[link]</a>
        `
    },
    {
      title: 'contacts',
      content: `
          download cv: <a href="https://www.dropbox.com/s/sj43bw7dfa18pa4/cv.pdf?dl=0" target="_blank" onclick="ga('send', 'event', 'buttons', 'click', 'download-cv-bottom');">[link]</a><br /><br />
          e-mail: <a href="mailto:nikolayenko2009@gmail.com" onclick="ga('send', 'event', 'buttons', 'click', 'email');">nikolayenko2009@gmail.com</a><br /><br />
          linkedin: <a href="https://www.linkedin.com/in/greenxiii/" onclick="ga('send', 'event', 'buttons', 'click', 'linkedin');" target="_blank">[greenxiii]</a><br /><br />
          github: <a href="https://github.com/greenxiii" onclick="ga('send', 'event', 'buttons', 'click', 'github-bottom');" target="_blank">[greenxiii]</a><br /><br />
          facebook: <a href="https://www.facebook.com/greenxiii13" onclick="ga('send', 'event', 'buttons', 'click', 'facebook');" target="_blank">[greenxiii13]</a><br /><br />
          instagram: <a href="https://www.instagram.com/greenxiii13/" onclick="ga('send', 'event', 'buttons', 'click', 'instagram');" target="_blank">[greenxiii13]</a><br /><br />
          medium: <a href="https://medium.com/@GreenXIII" onclick="ga('send', 'event', 'buttons', 'click', 'medium');" target="_blank">[GreenXIII]</a><br /><br />
        `
    },
    {
      title: 'Game',
      content: `Use SPACE to jump`
    }
  ],
};

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default globalReducer;
