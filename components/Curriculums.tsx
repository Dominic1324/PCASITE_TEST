import { curriculumsData } from "@/app/data/curriculums";

const Curriculums = () => {
    return (
        <section>
            <div className="container mx-auto text-center py-12">
                <h2 className="text-3xl font-bold">Our Curriculums</h2>
            </div>
            {curriculumsData.map((curriculum, index) => (
                <div key={curriculum.id} className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
                    <div 
                        className="relative h-80 w-full bg-fixed bg-cover bg-center"
                        style={{ backgroundImage: `url(${curriculum.image})` }}
                    >
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <h3 className="text-4xl font-bold text-white ml-4 md:ml-12" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>{curriculum.title}</h3>
                        </div>
                    </div>
                    <div className="container mx-auto py-12 px-4 md:px-6">
                        <div className="max-w-3xl mx-auto text-center">
                            <p className="text-lg text-muted-foreground mb-8">{curriculum.description}</p>
                            <ul className="grid grid-cols-2 gap-4">
                                {curriculum.courses.map((course, courseIndex) => (
                                    <li key={courseIndex} className="bg-white p-4 rounded-lg shadow-sm text-center">{course}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Curriculums;
