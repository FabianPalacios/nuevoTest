const request = require('supertest');
const app = require('../app');



describe('Endpoints de Articulos', () => {
  it('debe devolver todos los articulos sin filtros', async () => {
    const res = await request(app).get('/api/articles');
    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it('debe devolver el articulo con el id especificado', async () => {
    const res = await request(app).get('/api/articles?id=2');
    expect(res.statusCode).toEqual(200);
    expect(res.body[0].ItemName).toEqual('Frijoles');
  });

  it('debe devolver todos los articulos del tipo especificado', async () => {
    const res = await request(app).get('/api/articles?typeItem=Alimentos');
    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toBeGreaterThan(0);
    expect(res.body[0].TypeItem).toEqual('Alimentos');
  });

  it('debe devolver todos los articulos creados entre las fechas especificadas', async () => {
    const res = await request(app).get('/api/articles?startDate=2022-01-02&endDate=2022-01-04');
    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toBeGreaterThan(0);
    expect(res.body[0].CreateDate).toBeGreaterThanOrEqual('2022-01-02');
    expect(res.body[0].CreateDate).toBeLessThanOrEqual('2022-01-04');
  });

  it('debe devolver el articulo con el id y tipo de articulo especificados', async () => {
    const res = await request(app).get('/api/articles?id=2&typeItem=Alimentos');
    expect(res.statusCode).toEqual(200);
    expect(res.body[0].ItemName).toEqual('Frijoles');
    expect(res.body[0].TypeItem).toEqual('Alimentos');
  });

  it('debe devolver el articulo con el id y creado entre las fechas especificadas', async () => {
    const res = await request(app).get('/api/articles?id=2&startDate=2022-01-02&endDate=2022-01-04');
    expect(res.statusCode).toEqual(200);
    expect(res.body[0].ItemName).toEqual('Frijoles');
    expect(res.body[0].CreateDate).toBeGreaterThanOrEqual('2022-01-02');
    expect(res.body[0].CreateDate).toBeLessThanOrEqual('2022-01-04');
  });

  it('debe devolver todos los articulos del tipo especificado y creados entre las fechas especificadas', async () => {
    const res = await request(app).get('/api/articles?typeItem=Bebidas&startDate=2022-01-07&endDate=2022-01-09');
    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toBeGreaterThan(0);
    expect(res.body[0].TypeItem).toEqual('Bebidas');
    expect(res.body[0].CreateDate).toBeGreaterThanOrEqual('2022-01-07');
    expect(res.body[0].CreateDate).toBeLessThanOrEqual('2022-01-09');
  });
    
  it('debe devolver un error 404 si el artículo con el id especificado no existe', async () => {
    const res = await request(app).get('/api/articles?id=100');
    expect(res.statusCode).toEqual(404);
  });
    
  it('debe devolver un error 400 si se especifican fechas en un formato incorrecto', async () => {
    const res = await request(app).get('/api/articles?startDate=2022-01-02&endDate=2022/01/04');
    expect(res.statusCode).toEqual(400);
    });
  });
