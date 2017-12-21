var Main = {
    data () {
        return {
            spanLeft: 4,
            spanRight: 20,
            classA:'large-userName',
            menu:'收起菜单栏'
        }
    },
    computed: {
        iconSize () {
            return this.spanLeft === 4 ? 20 :30;
        },
        faceSize(){
            return this.spanLeft === 4 ? 'large' :'small';
        }
    },
    methods: {
        toggleClick () {
            if (this.spanLeft === 4) {
                this.spanLeft = 2;
                this.spanRight = 22;
                this.classA = 'small-userName';
                this.menu='展开菜单栏'

            } else {
                this.spanLeft = 4;
                this.spanRight = 20;
                this.classA = 'large-userName';
                this.menu='收起菜单栏'
            }
        },
        changeSrc(src){
            document.getElementById('rightFrame').src=src
        }
    }
};
var mainComponent = Vue.extend(Main);
new mainComponent().$mount('#admin-index');


//个人信息
var PersonalInformation = {
    data () {
        return {
            formValidate: {
                name: '',
                mail: '',
                city: '',
                gender: '',
                interest: [],
                date: '',
                time: '',
                desc: ''
            },
            ruleValidate: {
                name: [
                    { required: true, message: 'The name cannot be empty', trigger: 'blur' }
                ],
                mail: [
                    { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
                    { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
                ],
                city: [
                    { required: true, message: 'Please select the city', trigger: 'change' }
                ],
                gender: [
                    { required: true, message: 'Please select gender', trigger: 'change' }
                ],
                interest: [
                    { required: true, type: 'array', min: 1, message: 'Choose at least one hobby', trigger: 'change' },
                    { type: 'array', max: 2, message: 'Choose two hobbies at best', trigger: 'change' }
                ],
                date: [
                    { required: true, type: 'date', message: 'Please select the date', trigger: 'change' }
                ],
                time: [
                    { required: true, type: 'date', message: 'Please select time', trigger: 'change' }
                ],
                desc: [
                    { required: true, message: 'Please enter a personal introduction', trigger: 'blur' },
                    { type: 'string', min: 20, message: 'Introduce no less than 20 words', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        handleSubmit (name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.$Message.success('Success!');
                } else {
                    this.$Message.error('Fail!');
                }
            })
        },
        handleReset (name) {
            this.$refs[name].resetFields();
        }
    }

};
var personalComponent = Vue.extend(PersonalInformation);
new personalComponent().$mount('#personal-information');

// 教育经历
var EducationExperience = {

};
var educationExperienceComponent = Vue.extend(EducationExperience);
new educationExperienceComponent().$mount('#education-experience');


// 博客类别
var BlogCategory = {

};
var blogCategoryComponent = Vue.extend(BlogCategory);
new blogCategoryComponent().$mount('#blog-category');


// 创建博客
var BlogCreate = {

};
var blogCreateComponent = Vue.extend(BlogCreate);
new blogCreateComponent().$mount('#blog-create');

// 博客管理
var BlogManage = {

};
var blogManageComponent = Vue.extend(BlogManage);
new blogManageComponent().$mount('#blog-manage');

// 学习经历
var LearningExperience = {

};
var learningExperienceComponent = Vue.extend(LearningExperience);
new learningExperienceComponent().$mount('#learning-experience');


// 技能与能力
var SkillsAndAbilities = {

};
var skillsAndAbilitiesComponent = Vue.extend(SkillsAndAbilities);
new skillsAndAbilitiesComponent().$mount('#skills-and-abilities');

// 作品展示
var Works = {

};
var worksComponent = Vue.extend(Works);
new worksComponent().$mount('#works');


// 作品分类
var WorksCategory = {

};
var WorksCategoryComponent = Vue.extend(WorksCategory);
new WorksCategoryComponent().$mount('#works-category');

// 轮播图管理
var PictureManage = {

};
var pictureManageComponent = Vue.extend(PictureManage);
new pictureManageComponent().$mount('#picture-manage');

// 差链接管理
var UrlManage = {

};
var urlManageComponent = Vue.extend(UrlManage);
new urlManageComponent().$mount('#url-manage');