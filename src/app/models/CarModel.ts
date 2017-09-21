export class CarModel {
   private year: Number;
   private make: string;
   private model: string;
   
   public constructor(year: Number, make: string, model: string) {
      this.year = year;
      this.make = make;
      this.model = model;
   }
   
   public setVehicleYear(year:Number) {
      this.year = year;
   }   
   
   public getVehicleYear() {
      return this.year;
   }
   
   public setVehicleMake(make:string) {
      this.make = make;
   }   
   
   public getVehicleMake() {
      return this.make;
   }

   public setVehicleModel(model:string) {
      this.model = model;
   }   
   
   public getVehicleModel() {
      return this.model;
   }
}