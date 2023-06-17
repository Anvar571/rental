import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CarsModule } from './cars/cars.module';
import { CategoryModule } from './category/category.module';
import { CountryModule } from './country/country.module';
import { PaymentModule } from './payment/payment.module';


@Module({
  imports: [AuthModule, UsersModule, CarsModule, CategoryModule, CountryModule, PaymentModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
