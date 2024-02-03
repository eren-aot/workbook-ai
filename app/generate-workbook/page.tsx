import React from 'react'

import { languageData, levelData } from '@/schemas/schemas';

const GenerateWorkBook = () => {

    // console.log(languageData);
    console.log(levelData);

    return (
        <main className='max-w-5xl mx-auto p-4 lg:mt-6 mb-24'>
            <div className='space-y-16'>
                <div className='space-y-6' id='language'>
                    <h2 className='text-3xl font-extrabold'>
                        I want to practice ...
                    </h2>
                    <div className='grid lg:grid-cols-6 gap-2 lg:justify-start'>
                        {languageData.map((language, index) => (
                            <div key={index}>
                                <div>
                                    <span className='text-3xl lg:text-6xl md:drop-shadow'>{language.symbol}</span>
                                    <p className='font-medium'>{language.language}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className='space-y-6' id='levels'>
                        <h2 className='text-3xl font-extrabold'>
                            My current Level ...
                        </h2>
                        <div className='grid lg:grid-cols-6 gap-2 lg:justify-start'>
                            {levelData.map((level, index) => (
                                <div key={index}>
                                    <div>
                                        <span className='text-3xl lg:text-6xl md:drop-shadow'>{level.level}</span>
                                        <p className='font-medium'>{level.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='space-y-6' id='topics'>
                        <h2 className='text-3xl font-extrabold'>
                            Topics
                        </h2>
                        <p>
                            Exercises will be centered around your favorite topics for more fun learning!
                            You can add up to 3 topics, or leave empty for a random selection.
                        </p>
                        
                    </div>

                </div>
            </div>
        </main>
    )
}

export default GenerateWorkBook