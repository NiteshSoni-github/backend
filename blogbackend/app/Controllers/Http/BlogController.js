'use strict'
const Blog = use('App/Models/Blog')
const DraftBlog = use('App/Models/Draftblog')
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
    let post = await Blog.query().where('id',request.input('id')).first();
    return response.send(post.toJSON())
  }
  async draftblog({request,response}){
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
              await imag.move(Helpers.publicPath('uploads/draftPicture'), {
                name: image,
              })              
              const decrypted = Encryption.decrypt(token)
              const authorId = decrypted.id  
              const blog = await DraftBlog.create({
                  title,
                  category,
                  image,
                  content,
                  discription,
                  authorId,
              }); 
              await blog.save()
              return 1;  
  }
          async getUserBlogs({request,response})
          {
            let token = request.input('token');
            const decrypted = Encryption.decrypt(token);
            let id =  decrypted.id;
           const draft = await DraftBlog.query().where('authorId',id).fetch();
            const publish = await Blog.query().where('authorId',id).fetch();
            let d1 = draft.toJSON();
            let d2 = publish.toJSON();
            let d = d1.concat(d2);
            return response.send(d);
          }

 // ---------- DELETE DRAFT BLOG  ----------------- //
          async deletedraft({request,response}){
            let id = request.input('id');
            let post = await DraftBlog.query().where('id',id).first() ;
            const temp = post.toJSON(); 
            fs.unlink("./public/uploads/draftPicture/"+temp.image, (err) => {
              if (err) {
                  console.log("failed to delete local image:"+err);
              } else {
                  console.log('successfully deleted local image');                                
              }
            });
           await post.delete();
          }

  // -------------------------- DELETE PUBLISHED BLOG -------------------------//
            async deletePublished({request}){
              let id = request.input('id');
              let post = await Blog.query().where('id',id).first() ;
              const temp = post.toJSON(); 
              fs.unlink("./public/uploads/blogPicture/"+temp.image, (err) => {
                if (err) {
                    console.log("failed to delete local image:"+err);
                } else {
                    console.log('successfully deleted local image');                                
                }
              });
            await post.delete(); 

            }
  // ------------- TESTING COMPONENT ------//
    async testing({request,response}){

    const imag = request.file('image', {
        types: ['image'],
        size: '6mb'
      })
      console.log(imag.subtype);
      // const image = new Date().getTime()+'.'+imag.subtype
      // // await imag.move(Helpers.publicPath('uploads/testing'), {
      // //   name: image,
      // // })
    
  return 1;

  };
}

module.exports = BlogController
