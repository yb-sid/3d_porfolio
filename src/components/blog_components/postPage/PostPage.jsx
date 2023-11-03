import React from 'react'
import { StarsCanvas } from '../../canvas'
import BlogNavbar from '../navbar/BlogNavbar'
import Footer from '../footer/Footer'
import SinglePage from '../singlePost/SinglePost'
import { useLocation } from 'react-router-dom'

const PostPage = () => {
    const location = useLocation()

    const queryParams = new URLSearchParams(location.search)
    const id = queryParams.get('id')
    return (
        <div className="relative z-0">
            <StarsCanvas />
            <div className="wrapper">
                <BlogNavbar catPage={true} />
                <SinglePage postId={id} />
                <Footer />
            </div>
        </div>
    )
}

export default PostPage