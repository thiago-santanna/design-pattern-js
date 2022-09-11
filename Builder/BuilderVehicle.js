class BuilderVehicle {
  static build(ImplBuilderVehicle) {
    ImplBuilderVehicle.buildHead();
    ImplBuilderVehicle.buildBody();
    ImplBuilderVehicle.buildWheel();
    return ImplBuilderVehicle.build();
  }
}

export default BuilderVehicle;
