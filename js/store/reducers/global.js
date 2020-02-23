const initialState = {
  texts: [
    {
      header: 'Web Development for you and your mom',
      title: 'bio',
      content: `
          Hi there! Its such a great to see you here! I'm front-end developer based in Ukraine. I'm passionate about development world. I've lived in this world since I was in the school and a lot of things have happened. <br /><br />
          You can briefly look what my mind was busy about in my <a href="https://www.dropbox.com/s/sj43bw7dfa18pa4/cv.pdf?dl=0">cv</a> or you can scroll down and read it more detailed but less structorised.<br /><br />
          PS: Of course, I do have side normal life with my lovely girlfriend and pretty doggie :) And I do believe that my time is the biggest resource I have.

        `
    },
    {
      title: 'development: chapter 1',
      content: `
          As I wrote I started coding from my school years. It was small e-shop projects on joomla and wordpress for some local championships.<br /><br />
          That was quite success and it was more then a reason to continue and get a Bachelor's degree in Programmer Engineering. That gave me a lot of basic knowelage starting from c#'s #include <everything> :) and ending with learing some openGL magic, and tricks with mysql.
          <br /><br />
          Besides it I worked on weekends on upwork and grabbed some part time work on holidays as a full-stack developer in small local company.
          It was quite passionate people whe teached me how to deal with monsters like Angular, Emberm, Bckbone, Symphony and Yii.
          That was also greate opportunities for me to implement something new and propose to use everything I wanted, Thats why we had few projects on express.js, tried to write some tests on Jasmin and all oure projects used Sass with tuned Gulp(or Grunt).
          <br /><br />
          After I was graduated I finally sign a contract with same local company for full time position, but in few years our paths diverged and I was ready for much bigger steps.
        `
    },
    {
      title: 'development: chapter 2',
      content: `
          Im pretty quick found great vacancie in neighbour city - Dnipro.
          Its a great team and project Im still working in. For three years here Im mostly working with Vue.js <3, but from times-to-times we're building something on React-Native or Angular.
          <br /><br />
          My role here is mostly being front-end hero, Its a lot of work with charts, visualising and allow users to edit and update big chunks of data.
          In same time, here I started to value my time as never before. Yes, I think Im much lazier then I was but in a good way. We're trying to automate everything that take too much time, thats why we're minimized and simplified steps for ci/cd with pipelines,  trying test as much as we can with Jest and creating some custom npm packages for being able to quickly reuse our components in future projects.
          My part here was to implement it all on front end side.
          <br /><br />
          In addition, when I firstly came to this company I was a first fully front-end guy in company and as long as we're expand I took a part of mentoring few new guys, I actually pretty loved this part because now I can quite be proud of the team we have now. 
          <br /><br />
          Sometimes Im also implementing my small "just for fun" projects on github using react/redux you can check my humble repos
          on <a href="https://github.com/greenxiii">GITHUB</a> 
          and <a href="http://codepen.io/GreenXIII/">CODEPEN</a>
        `
    },
    {
      title: 'design',
      content: `
          As designer I worked few years in two first years in university and it was something like hobbie, 
          because I was quite loaded via student's works and my head was in exploding state till evening. <br /><br />
          So, for make little rest and have money from this time I was drawing logos and websites. <br /><br />
          After this I direct all my efforts to be cool web developer. 
          But, from time to time, I open Adobe Photoshop or Adobe Illustrator and draw something for my own projects or just for fun.<br /><br />
          You can see my works on <a href="https://dribbble.com/greenxiii">Dribble</a> and <a href="https://www.behance.net/greenxiii">behance</a>.
        `
    },
    {
      title: 'achivements',
      content: `
          OnePageLove Award: <a href="https://onepagelove.com/greenxiii">[link]</a><br /><br />
          Mention in "The Essentials of the Split Screen Trend in Web Design" article: <a href="https://visualhierarchy.co/blog/split-screen-trend-in-web-design/">[link]</a><br /><br />
          Mention in "How to design the perfect single page website" article: <a href="http://www.webdesignerdepot.com/2014/12/how-to-design-the-perfect-single-page-website/">[link]</a>
        `
    },
    {
      title: 'contacts',
      content: `
          download cv: <a href="https://www.dropbox.com/s/sj43bw7dfa18pa4/cv.pdf?dl=0">[link]</a><br /><br />
          e-mail: <a href="mailto:nikolayenko2009@gmail.com">nikolayenko2009@gmail.com</a><br /><br />
          linkedin: <a href="https://www.linkedin.com/in/greenxiii/">[greenxiii]</a><br /><br />
          facebook: <a href="https://www.facebook.com/greenxiii13">[greenxiii13]</a><br /><br />
          instagramm: <a href="https://www.instagram.com/greenxiii13/">[greenxiii13]</a><br /><br />
          medium: <a href="https://medium.com/@GreenXIII">[GreenXIII]</a><br /><br />
        `
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
