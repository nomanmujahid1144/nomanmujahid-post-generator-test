import React, { useEffect, useState } from 'react';
import { Button } from '../minor-components/Button';
import { Heading } from '../minor-components/Heading';
import { Card } from '../minor-components/Card';
import { CardContent } from '../minor-components/CardContent';
import { LoadingCardAnimation } from '../minor-components/LoadingCardAnimation';
import { useDispatch, useSelector } from 'react-redux';
import { generatePosts } from '../../redux/Actions/generatePostAction';

export const BlogForm = () => {

    const dispatch = useDispatch();

    const [blogContent, setBlogContent] = useState('');
    const [socialMediaPosts, setSocialMediaPosts] = useState({ twitter: '', facebook: '', instagram: '' });
    const [error, setError] = useState(null);

    const loading = useSelector(
        (state) => state.ProgressBarReducer
    );

    const { generatePost, message } = useSelector(
        (state) => state.GeneratePostsReducer
    )
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        dispatch(generatePosts({ blogContent }));
    };


    useEffect(() => {
        if (Object.keys(generatePost).length === 0) {
            setError(message);
        } else {
            setSocialMediaPosts(generatePost)
        }
    }, [generatePost,message])
    
    return (
        <form onSubmit={handleSubmit}>
            <div className="my-auto">
                <div className="mt-2">
                    <Heading heading={'Enter the title of the Post'}/>
                    <textarea
                        rows={6}
                        className="w-full rounded-lg px-2 py-3 bg-background text-color border border-color"
                        value={blogContent}
                        onChange={(e) => setBlogContent(e.target.value)}
                        placeholder="Enter your blog post content here..."
                    />
                </div>
                <div className='flex justify-center mt-5'>
                    <Button
                        type={'submit'}
                        text={'Submit post'}
                    />
                </div>
            </div>

            {!error ? (
                <div class="grid gap-x-5 gap-y-5 grid-rows-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-cols-fr mt-10">
                    <Card>
                        <Heading heading={'Twitter'} />
                        {loading ? <LoadingCardAnimation /> : (
                            <CardContent
                                content={socialMediaPosts.twitter}
                            />
                        )}
                    </Card>
                    <Card>
                        <Heading heading={'Facebook'} />
                        {loading ? <LoadingCardAnimation /> : (
                            <CardContent
                                content={socialMediaPosts.facebook}
                            />
                        )}
                    </Card>
                    <Card>
                        <Heading heading={'Instagram'} />
                        {loading ? <LoadingCardAnimation /> : (
                            <CardContent
                                content={socialMediaPosts.instagram}
                            />
                        )}
                    </Card>
                </div>
                ):(
                <div className='mt-10'>
                    <Card>
                        <CardContent
                            content={error}
                        />
                    </Card>
                </div>
            )}
        </form>
    )
}