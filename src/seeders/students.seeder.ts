import { DataSource } from 'typeorm';
import { Student } from '../modules/students/entities/student.entity';
export class StudentSeeder {
  constructor(private dataSource: DataSource) {}
  async run() {
    const userRepository = this.dataSource.getRepository(Student);
    const student = [
      {
        email: 'harshit@gmail.com',
        password: '45678765',
        age: 18,
      },
      {
        email: 'hello@gmail.com',
        password: '4545678906',
        age: 20,
      },
    ];
    await userRepository.save(student);
    console.log('Seed data inserted for students');
  }
}
