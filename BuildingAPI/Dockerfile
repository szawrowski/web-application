FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["BuildingAPI/BuildingAPI/BuildingAPI.csproj", "BuildingAPI/"]
RUN dotnet restore "BuildingAPI/BuildingAPI/BuildingAPI.csproj"
COPY . .
WORKDIR "/src/BuildingAPI/BuildingAPI"
RUN dotnet build "BuildingAPI.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "BuildingAPI.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "BuildingAPI.dll"]
