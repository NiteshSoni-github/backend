'use strict'
const Blog = use('App/Models/Blog')
const Hash = use('Hash')
const Encryption = use('Encryption')
const Helpers = use('Helpers')
const fs = require('fs');
class BlogController {
    async publishblog({request,response}){
        let {
            title,
            category,
            content,
            discription,
            token
        } = request.all();
        const imag = request.file('image', {
            types: ['image'],
            size: '6mb'
          })
          const image = new Date().getTime()+'.'+imag.subtype
          await imag.move(Helpers.publicPath('uploads/blogPicture'), {
            name: image,
          })
        const decrypted = Encryption.decrypt(token)
        const authorName = decrypted.f_name
         const authorId = decrypted.id
        
    const blog = await Blog.create({
        title,
        category,
        image,
        content,
        discription,
        authorName,
        authorId,
    }); 
    await blog.save()
    return 1;
    };
    // get all blog data for show blog page

  async getAllBlogData({request,response}){
    let token = request.input('token');
    const blog = await Blog.all();
    var temp = blog.toJSON()
    return response.send(temp);  
  }
  async getParticularBlogData({request,response}){
    console.log(request.input('id'));
    let post = await Blog.query().where('id',request.input('id')).first()
    return response.send(post.toJSON())
  }
 
//   async testing({request,response}){

//   const imag = request.file('image1', {
//       types: ['image'],
//       size: '6mb'
//     })
//     const image = new Date().getTime()+'.'+imag.subtype
//     await imag.move(Helpers.publicPath('uploads/testing'), {
//       name: image,
//     })

// return 'http://127.0.0.1:3333/testing';

// };
}

module.exports = BlogController
