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
        console.log('fg');
        const imag = request.file('image', {
            types: ['image'],
            size: '2mb'
          })
          console.log('fg');
          const image = new Date().getTime()+'.'+imag.subtype
          await imag.move(Helpers.publicPath('uploads/blogPicture'), {
            name: image,
          })
          console.log('fg');
        const decrypted = Encryption.decrypt(token)
        const authorName = decrypted.f_name
         const authorId = decrypted.id
         console.log(authorName)
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
    }
}

module.exports = BlogController
